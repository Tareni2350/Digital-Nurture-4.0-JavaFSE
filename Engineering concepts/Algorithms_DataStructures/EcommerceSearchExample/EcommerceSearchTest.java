// EcommerceSearchTest.java
public class EcommerceSearchTest {
    public static void main(String[] args) {
        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Shoes", "Fashion"),
            new Product(103, "Phone", "Electronics"),
            new Product(104, "Watch", "Accessories"),
            new Product(105, "Tablet", "Electronics")
        };

        String target = "Phone";

        System.out.println("🔍 Linear Search:");
        Product result1 = SearchEngine.linearSearch(products, target);
        System.out.println(result1 != null ? result1 : "Product not found");

        System.out.println("\n🔍 Binary Search:");
        Product result2 = SearchEngine.binarySearch(products, target);
        System.out.println(result2 != null ? result2 : "Product not found");
    }
}
