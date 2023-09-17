using System.Data;
using System.Data.SqlClient;

namespace OuterHeaven.Models
{
    public class ProductDatabase
    {
        protected string DatabaseConnection;

        protected string DatabaseStatus;

        protected SqlConnection LinkToDatabase;

        protected string ConnectToDatabase()
        {
            try
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

            }
            catch (Exception ex)
            {


            }

            return DatabaseStatus;
        }
    }

    public class Products : ProductDatabase
    {
        public int AvailiableStock;

        private string StockQuery;

        private SqlDataAdapter SqlTranslater;

        private SqlCommand QueryExecuter;

        private DataTable IndexedProduct;


        private DataRow IndexProductDetails;

        private DataTable SetupIndexedProduct()
        {
            IndexedProduct = new DataTable("Product");

            IndexedProduct.Columns.Add(new DataColumn("Name", typeof(string)));
            IndexedProduct.Columns.Add(new DataColumn("Description", typeof(string)));
            IndexedProduct.Columns.Add(new DataColumn("Price", typeof(double)));
            IndexedProduct.Columns.Add(new DataColumn("Quantity", typeof(int)));
            IndexedProduct.Columns.Add(new DataColumn("Serial Number", typeof(string)));


            return IndexedProduct;
        }

        //private DataTable AddProductDetails(string Name, string Description, double Price, int Quantity, string SerialNumber)
        //{
        //    IndexProductDetails = IndexedProduct.NewRow();
        //    IndexProductDetails["Name"] = Name;
        //    IndexProductDetails["Description"] = Description;
        //    IndexProductDetails["Price"] = Price;
        //    IndexProductDetails["Quantity"] = Quantity;
        //    IndexProductDetails["Serial Number"] = SerialNumber;

        //    IndexedProduct.Rows.Add(IndexProductDetails);
        //    return IndexedProduct;
        //}

        public int CheckAvailableQuantity(String ItemName)
        {

            if (DatabaseStatus == "Live!")
            {
                try
                {
                    SetupIndexedProduct();

                    using (LinkToDatabase = new SqlConnection(DatabaseConnection))
                    {
                        StockQuery = "SELECT DISTINCT Name, Quantity FROM PRODUCTS WHERE Name= " + ItemName;

                        using (QueryExecuter = new SqlCommand(StockQuery, LinkToDatabase))
                        {
                            QueryExecuter.CommandType = CommandType.Text;

                            using (SqlTranslater = new SqlDataAdapter(QueryExecuter))
                            {
                                SqlTranslater.Fill(IndexedProduct);
                            }

                        }


                    }
                    LinkToDatabase.Close();
                }
                catch (Exception CouldNotIndexProduct) { }

                foreach (DataRow Row in IndexedProduct.Rows)
                {
                    AvailiableStock = (int)Convert.ToInt64(Row["Quantity"].ToString());
                }



            }
            return AvailiableStock;
        }

    }
}
