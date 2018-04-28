class Template{
    _id:string;
    type:string;
    logoURL:string;
    navigation:{navigation1:{title:string, link:string}[], navigation2:{title:string, link:string}[]};
    product:{title:string, titleSecondary:string, description:string, price:string, link:string, buyButton:boolean, imageURLs:string[]};
    tabs:{title:string, services:boolean[]}[];
    recommendedTitle:string;
    recommended:{enabled:boolean, title:string, imageURL:string, price:string, link:string};
    customcss:string;
    extraText:string;

    constructor(){
        this.type = "Elegance";
        this.logoURL = "https://placehold.it/200x100";
        this.navigation = {
            navigation1: [{title: "Dude", link: "Bra"}], 
            navigation2: [{title: "Bra", link: "Dude"}]
        };
        this.product = {
            title: "Test Produkt", 
            titleSecondary: "Secondary", 
            description: "Description", 
            price: "69,99€", 
            link: "https://dude", 
            buyButton: true,
            imageURLs:["https://placehold.it/500"]
        };
    }
}

export default Template;