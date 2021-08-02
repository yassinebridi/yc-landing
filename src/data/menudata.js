// import menuImage from '../assets/image/menu-image.webp'

export const menuItems = [
         {
           name: "",
           label: "Landings",
           items: [
             { name: "", label: "Software" },
             { name: "mobile", label: "Mobile App" },
             { name: "conferrence", label: "Video Conference" },
             { name: "telemedecine", label: "Telemedicine" },
             { name: "crypto", label: "Crypto" },
             { name: "web", label: "Web Application" },
             { name: "ios", label: "IOS App" },
             { name: "webHosting", label: "Web Hosting" },
             { name: "onlineCourse", label: "Online Course" },
           ],
         },
         {
           name: "pages",
           label: "Pages",
           items: [
             { name: "about", label: "About Us" },
             { name: "contact-us", label: "Contact Us" },
             {
               name: "#",
               label: "Blog",
               items: [
                 { name: "blog", label: "Blog Single" },
                 { name: "blog-details", label: "Blog Details" },
               ],
             },
             {
               name: "careers",
               label: "Careers",
               items: [
                 { name: "career", label: "Career" },
                 { name: "career-details", label: "Career Details" },
               ],
             },
             {
               name: "#",
               label: "Case Study",
               items: [
                 { name: "case-studies", label: "Case Studies" },
                 { name: "case-study-details", label: "Case Details" },
               ],
             },
             {
               name: "#",
               label: "Pricing",
               items: [
                 { name: "pricing-1", label: "Pricing-01" },
                 { name: "pricing-2", label: "Pricing-02" },
                 { name: "pricing-3", label: "Pricing-03" },
               ],
             },
             {
               name: "#",
               label: "Shop",
               items: [
                 { name: "shop", label: "Product" },
                 { name: "shop-details", label: "Product Details" },
                 { name: "cart", label: "Cart" },
                 { name: "checkout", label: "Checkout" },
               ],
             },
             {
               name: "#",
               label: "Account",
               items: [
                 { name: "sign-in", label: "Sign In" },
                 { name: "sign-up", label: "Sign Up" },
                 { name: "reset-password", label: "Reset Password" },
               ],
             },
             {
               name: "utility",
               label: "Utility",
               items: [
                 { name: "faq", label: "FAQ" },
                 { name: "comingsoon", label: "Coming soon" },
                 { name: "terms", label: "Terms & Conditions" },
                 { name: "404", label: "404 Page" },
                 { name: "thank-you", label: "Thank You" },
               ],
             },
           ],
         },
         {
           name: "megamenu",
           label: "Portfolios",
           megamenu:true,
           col:12,
           items: {
            //  image:{
            //   url:menuImage,
            //   col:"5",
            //  },
             col_1 : {
              title:"GALLERY STYLE",
              items:[
                {
                 name: "gallery-2-col",
                 label: "Two Column Grid",
                },
                {
                 name: "gallery-3-col",
                 label: "Three Column Grid",
                },
                {
                 name: "gallery-4-col",
                 label: "Four Column Grid",
                },
                {
                 name: "gallery-2-col-wide",
                 label: "Two Column Wide",
                },
                {
                 name: "gallery-3-col-wide",
                 label: "Three Column Wide",
                },
                {
                 name: "gallery-4-col-wide",
                 label: "Four Column Wide",
                },
               ]
             },
             col_2 : {
              title:"CLASSIC GRID STYLE",
              items:[
                {
                 name: "classic-2-col",
                 label: "Two Column Grid",
                },
                {
                 name: "classic-3-col",
                 label: "Three Column Grid",
                },
                {
                 name: "classic-4-col",
                 label: "Four Column Grid",
                },
                {
                 name: "classic-2-col-wide",
                 label: "Two Column Wide",
                },
                {
                 name: "classic-3-col-wide",
                 label: "Three Column Wide",
                },
                {
                 name: "classic-4-col-wide",
                 label: "Four Column Wide",
                },
               ]
             },
             col_3 : {
              title:"MASONRY STYLE",
              items:[
                {
                 name: "masonry-3-col",
                 label: "Three Column Grid",
                },
                {
                 name: "masonry-4-col",
                 label: "Four Column Grid",
                },
                {
                 name: "masonry-3-col-wide",
                 label: "Three Column Wide",
                },
                {
                 name: "masonry-4-col-wide",
                 label: "Four Column Wide",
                },
                {
                 name: "masonry-3-col-classic",
                 label: "Three Column Classic",
                },
                {
                 name: "masonry-4-col-classic",
                 label: "Four Column Classic",
                },
               ]
             },
             col_4 : {
              title:"SINGLE PROJECT",
              items:[
                {
                 name: "portfolio-details-1",
                 label: "Portfolio Details 01",
                },
                {
                 name: "portfolio-details-2",
                 label: "Portfolio Details 02",
                },
                {
                 name: "portfolio-details-3",
                 label: "Portfolio Details 03",
                },
               ]
             },
            //  col_6 : [
            //    {
            //     name: "supa",
            //     label: "supa",
            //    },
            //    {
            //     name: "Mega",
            //     label: "Mega",
            //    },
            //    {
            //     name: "menu",
            //     label: "Menu",
            //    },
            //    {
            //     name: "lele",
            //     label: "LEle",
            //    }
            //   ]
           }
         },
         {
           name: "blog",
           label: "Blog",
         },
         {
           name: "https://finestdevs.com/product-support/",
           label: "Support",
           isExternal: true,
         },
       ];
