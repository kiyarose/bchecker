async function report(bstatus) {
        var url1 = 'https://www.google.com';
        var url2 = 'https://www.xbox.com';

        fetch(url1)
            .then(response => {
                if (response.ok) {
                    console.log('URL1 Accessable, Assuming internet is up!');
                    var stat1 = 'ok'
                }
            })
            .catch(error => {
                console.error(error);
                alert(error);
                var stat1 = error
                return stat1
            });
             fetch(url2)
            .then(response => {
                if (response.ok) {
                    console.log('URL2 Accessable, Assuming unblocked');
                    var stat2 = 'ok'
                    return stat1
                }
            })
            .catch(error => {
                console.error(error)
                var stat2 = error
            });
            var results = stat1 + stat2
            return results
   }
