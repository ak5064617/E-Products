

Code Structure - 

      -app 
        -footer 
        -header 
        -modules
            -productsModule
                -components 
                   -productmodal 
                   -productslist
                -services
                   -productservice
                -interfaces
            -sharedModule
                -components 
                   -customdropdown  // this is a common component for dropdown which can be used across the app
                -services
                -interfaces
       -assets


Explaining the Application - 
    I have given a name to this Application (E-Products).
    -Created ProductsList component for listing all the products:
        - Loading the initial data by limiting it to 10 items per page using the loadProducts() function on load, while also making an API call to fetch categories.
        - On scroll, when reaching the bottom of the page, loadProducts() is called again to fetch additional data.
        - For the UI, a grid box layout is being used.
        - For filtering/sorting, API calls are made with the respective filter/sorting queries. Additionally, when reaching the bottom on scroll, the loadFilteredProducts(filtered) function is triggered to load filtered results.
        - i am lazy laoding the images of product.
    
    -Created ProductModal component to display product details on clicking a product card:
        -Used matDialog to open a popup for the modal.
        -Passed data through mat-dialog for rendering details in the popup.

    -Created a common component (custom-dropdwon component) for dropdown which can be used across the application

Limitations
    I have used https://fakestoreapi.com for product listing. However, this API does not support page size or pagination queries. To implement the "load more" functionality on scroll, I added a page size parameter to the query to fetch more products. Since the API only provides a total of 20 products, implementing "load more" without proper pagination or a cursor is not entirely feasible. As a result, duplicate data may appear due to API limitations; please ignore duplicates in this case.


Area of Improvement : - 

  - Instead of using a product modal, we can navigate to a dedicated route like 'productDetail/:id' and place related componenta in a separate module. This approach enhances scalability and allows us to leverage lazy loading for improved performance.
  - we can use ngRX for state management to manage cart, maintainability and product data effectively.
  - we can Ensure accessibility by following ARIA guidelines, providing meaningful labels, and making the app  keyboard-navigable.
  - We can use a skeleton loader to improve the user experience by providing a smoother UI while the data is being loaded.
