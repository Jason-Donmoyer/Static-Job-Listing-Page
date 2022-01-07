// array to hold job listing information
const jobListings = [];


// Fetch API call to extract json data
fetch('../data.json')
  .then(response => {
    return response.json();
  })
  .then(result => {
    for(let i in result) {
      let jobListing = {};
      // console.log(result[i].tools);
      jobListing.logo = result[i].logo;
      jobListing.companyName = result[i].company;
      jobListing.isNew = result[i].new;
      jobListing.isFeatured = result[i].featured;
      jobListing.position = result[i].position;
      jobListings.push(jobListing);
    }
  })
  .catch(err => {
    console.log(err);
  });

  console.log(jobListings);

