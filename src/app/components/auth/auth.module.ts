namespace root {
    angular
        .module('components.auth', [
            'ui.router',
            'firebase'
        ]);

        // .config(function ($firebaseRefProvider) {
            
        //     var config = {
        //       apiKey: "AIzaSyCvw5ryzUlLSLJxi_9e1onYQq9DndhpvPU",
        //       authDomain: "contacts-manager-4efc9.firebaseapp.com",
        //       databaseURL: "https://contacts-manager-4efc9.firebaseio.com",
        //       projectId: "contacts-manager-4efc9",
        //       storageBucket: "contacts-manager-4efc9.appspot.com",
        //       messagingSenderId: "1081650064661"
        //     };
        
        //     $firebaseRefProvider
        //       .registerUrl({
        //         default: config.databaseURL,
        //         contacts: config.databaseURL + '/contacts'
        //       });
        
        //     firebase.initializeApp(config);
}