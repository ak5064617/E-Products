 interface IPRODUCT  {
    image: string;
    id: number;
    category: string;
    description: string;
    price: number;
    title: string
    rating:  {
        count: number;
        rate: number;
    }
 }

export default IPRODUCT;