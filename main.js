axios.get('https://api.github.com/users/charlison')
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.warn(error);
    })
