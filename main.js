async function report(url1, url2) {
   try{
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
            });
             fetch(url2)
            .then(response => {
                if (response.ok) {
                    console.log('URL2 Accessable, Assuming unblocked');
                    var stat2 = 'ok'
                }
            })
            .catch(error => {
                console.error(error)
                var stat2 = error
            });
            var results = stat1 + stat2
            return results

       }catch (error) {
          console.log(error);
       }
   }
const result = report("https://www.google.com", "https://www.xbox.com")
document.getElementById("res").body = result
