using System.Data.SqlClient;
using System.Data;


namespace OuterHeaven.Models
{
    public class CustomerDatabase
    {
        public string Username { get; set; }

        public string Password { get; set; }

        public string UpdatedPassword { get; set; }

        public string UID { get; set; }

        public string RegistrationStatus { get; set; }

        public string LoginStatus { get; set; }

        public string ResetStatus { get; set; }

        private string DatabaseConnection;

        private string DatabaseStatus;

        private SqlConnection LinkToDatabase;

        private SqlDataAdapter SqlTranslater;

        private int StructureChange;

        private string ConnectToDatabase()
        {
            using (LinkToDatabase = new SqlConnection(DatabaseConnection))
            {
                LinkToDatabase.Open();

                if (LinkToDatabase.State != null)
                {
                    switch (LinkToDatabase.State)
                    {

                        case ConnectionState.Open:
                            DatabaseStatus = "Live!";
                            break;
                        case ConnectionState.Closed:
                            DatabaseStatus = "Closed!";
                            break;
                    }

                }
            }
            return DatabaseStatus;
        }

        public string Registration()
        {
           ConnectToDatabase();

            if(DatabaseStatus == "Live!")
            {

                using(LinkToDatabase = new SqlConnection(DatabaseConnection))
                {

                    SqlCommand AddCustomer = new SqlCommand("Registeration", LinkToDatabase);
                    AddCustomer.CommandType = CommandType.StoredProcedure;

                    SqlParameter CustomerUserName = new SqlParameter();
                    CustomerUserName.ParameterName = "@CustomerUserName";
                    CustomerUserName.SqlDbType = SqlDbType.VarChar;
                    CustomerUserName.Value = this.Username;

                    SqlParameter CustomerPassword = new SqlParameter();
                    CustomerPassword.ParameterName = "@CustomerPasscode";
                    CustomerPassword.SqlDbType = SqlDbType.VarChar;
                    CustomerPassword.Value = this.Password.GetHashCode();

                    SqlParameter CustomerUID = new SqlParameter();
                    CustomerUID.ParameterName = "@CustomerID";
                    CustomerUID.SqlDbType = SqlDbType.VarChar;
                    CustomerUID.Value = this.UID;

                    AddCustomer.Parameters.Add(CustomerUserName);
                    AddCustomer.Parameters.Add(CustomerPassword);
                    AddCustomer.Parameters.Add(CustomerUID);

                    LinkToDatabase.Open();

                    this.StructureChange = AddCustomer.ExecuteNonQuery();

                    LinkToDatabase.Close();

                    if (StructureChange >= 1)
                    {
                        this.RegistrationStatus = "Registration Successful!";
                    }
                    else if (StructureChange == 0)
                    {
                        this.RegistrationStatus = "Registration Failed. Please re-check that your username and password met the requirements for registration.";
                    }
                }
            }

           

            return RegistrationStatus;
        }

        public string Login()
        {
            ConnectToDatabase();

            if (DatabaseStatus == "Live!")
            {

                using (LinkToDatabase = new SqlConnection(DatabaseConnection))
                {

                    SqlCommand AuthenticateAndAuthorize = new SqlCommand("Login", LinkToDatabase);
                    AuthenticateAndAuthorize.CommandType = CommandType.StoredProcedure;

                    SqlParameter CustomerUserName = new SqlParameter();
                    CustomerUserName.ParameterName = "@CustomerUserName";
                    CustomerUserName.SqlDbType = SqlDbType.VarChar;
                    CustomerUserName.Value = this.Username;

                    SqlParameter CustomerPassword = new SqlParameter();
                    CustomerPassword.ParameterName = "@@ustomerPasscode";
                    CustomerPassword.SqlDbType = SqlDbType.VarChar;
                    CustomerPassword.Value = this.Password.GetHashCode();

                    AuthenticateAndAuthorize.Parameters.Add(CustomerUserName);
                    AuthenticateAndAuthorize.Parameters.Add(CustomerPassword);

                    LinkToDatabase.Open();

                    this.StructureChange = AuthenticateAndAuthorize.ExecuteNonQuery();

                    using (SqlTranslater = new SqlDataAdapter(AuthenticateAndAuthorize))
                    {
                        DataTable Returns = new DataTable();
                        SqlTranslater.Fill(Returns);
                       
                        foreach (DataRow Value in Returns.Rows)
                        {
                            Value["CustomerID"] = this.UID;
                            Value["CustomerUsername"] = this.Username;
                        }
                    }

                    LinkToDatabase.Close();

                    if(this.UID != null && this.Username != null)
                    {
                        this.LoginStatus = "Login successful";
                    }
                    else
                    {
                        this.LoginStatus = "Login failed";
                    }
              
                }
            }

            return LoginStatus;
        }

        public string ResetPassword()
        {
            ConnectToDatabase();

            if (DatabaseStatus == "Live!")
            {

                using (LinkToDatabase = new SqlConnection(DatabaseConnection))
                {

                    SqlCommand ResetAccountDetails = new SqlCommand("ResetCredentials", LinkToDatabase);
                    ResetAccountDetails.CommandType = CommandType.StoredProcedure;

                    SqlParameter CustomerUserName = new SqlParameter();
                    CustomerUserName.ParameterName = "@CustomerUserName";
                    CustomerUserName.SqlDbType = SqlDbType.VarChar;
                    CustomerUserName.Value = this.Username;

                    SqlParameter LastKnownCustomerPassword = new SqlParameter();
                    LastKnownCustomerPassword.ParameterName = "@CustomerPasscode";
                    LastKnownCustomerPassword.SqlDbType = SqlDbType.VarChar;
                    LastKnownCustomerPassword.Value = this.Password.GetHashCode();

                    SqlParameter NewCustomerPassword = new SqlParameter();
                    LastKnownCustomerPassword.ParameterName = "@UpdatedCustomerPasscode";
                    LastKnownCustomerPassword.SqlDbType = SqlDbType.VarChar;
                    LastKnownCustomerPassword.Value = this.UpdatedPassword.GetHashCode();

                    ResetAccountDetails.Parameters.Add(CustomerUserName);
                    ResetAccountDetails.Parameters.Add(LastKnownCustomerPassword);
                    ResetAccountDetails.Parameters.Add(NewCustomerPassword);

                    LinkToDatabase.Open();

                    int StructureChange = ResetAccountDetails.ExecuteNonQuery();

                    LinkToDatabase.Close();

                    if (StructureChange >= 1)
                    {
                        this.ResetStatus = "Password has been reset successfully!";
                    }
                    else if (StructureChange == 0)
                    {
                        this.ResetStatus = "Password reset failed.";
                    }
                }
            }
            return ResetStatus;
        }
    }
}
