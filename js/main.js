const jobListings = [];

fetch('../data.json')
  .then(response => {
    
    return response.json();
  })
  .then(result => {
    for(let i in result) {
      let jobListing = {};
      console.log(result[i].logo);
      jobListing.logo = result[i].logo;
      jobListings.push(jobListing);
    }
  })
  .catch(err => {
    console.log(err);
  });

