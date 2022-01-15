// array to hold job listing information
const jobListings = [];

const mainContainer = document.getElementById('main-container');


function makeCircle(par) {
  let circle = document.createElement('div');
  circle.classList.add('small-circle');
  par.appendChild(circle);
}

function updateUI(jobListings) {
  
  jobListings.forEach((listing) => {
  let jobListing = document.createElement('article');
    jobListing.classList.add('job-listing-container');
  let companyLogo = document.createElement('div');
    companyLogo.classList.add('company-logo');
    companyLogo.id = 'company-logo';
    companyLogo.style.backgroundImage = `url(${listing.logo})`;

    jobListing.appendChild(companyLogo);
  let desktopListing = document.createElement('div');
    desktopListing.classList.add('job-listing-desktop-container');

    jobListing.appendChild(desktopListing);
  let jobListingDescriptionContainer = document.createElement('div');
    jobListingDescriptionContainer.classList.add('job-listing-description-container');
    
    desktopListing.appendChild(jobListingDescriptionContainer);
  let jobListingFeaturesContainer = document.createElement('div');
    jobListingFeaturesContainer.classList.add('job-listing-features-container');
    
    jobListingDescriptionContainer.appendChild(jobListingFeaturesContainer);
  let companyName = document.createElement('h2');
    companyName.classList.add('company-name');
    companyName.innerHTML = listing.companyName;
    
    jobListingFeaturesContainer.appendChild(companyName);
  let featuresContainer = document.createElement('div');
    featuresContainer.classList.add('features-container');

    jobListingFeaturesContainer.appendChild(featuresContainer);

  if (listing.isNew) {
    let newListing = document.createElement('div');
      newListing.classList.add('listing-container');
      newListing.classList.add('new-listing-container');
    let listing = document.createElement('h3');
      listing.classList.add('listing');
      listing.textContent = 'NEW!';
      newListing.appendChild(listing);

    jobListingFeaturesContainer.appendChild(newListing);
  }

  if (listing.isFeatured) {
    let newListing = document.createElement('div');
      newListing.classList.add('listing-container');
      newListing.classList.add('featured-listing-container');
    let listing = document.createElement('h3');
      listing.classList.add('listing');
      listing.textContent = 'FEATURED!';
      newListing.appendChild(listing);
      jobListing.classList.add('featured-listing-border');

    jobListingFeaturesContainer.appendChild(newListing);
  }

  let jobTitle = document.createElement('h1');
    jobTitle.classList.add('job-title');
    jobTitle.textContent = listing.position;
    jobListingDescriptionContainer.appendChild(jobTitle);
  
  let jobListingInfoContainer = document.createElement('div');
    jobListingInfoContainer.classList.add('job-listing-info-container');
    jobListingDescriptionContainer.appendChild(jobListingInfoContainer);

  let jobRole = document.createElement('h4');
    jobRole.classList.add('job-info');
    jobRole.id = 'role';
    jobRole.textContent = listing.role;
    jobListingInfoContainer.appendChild(jobRole);

  makeCircle(jobListingInfoContainer);

  let jobLevel = document.createElement('h4');
    jobLevel.classList.add('job-info');
    jobLevel.id = 'level';
    jobLevel.textContent = listing.level;
    jobListingInfoContainer.appendChild(jobLevel);

  makeCircle(jobListingInfoContainer);
  
  let jobPostedAt = document.createElement('h4');
    jobPostedAt.classList.add('job-info');
    jobPostedAt.id = 'posted-at';
    jobPostedAt.textContent = listing.postedAt;
    jobListingInfoContainer.appendChild(jobPostedAt);

  let horizontalLine = document.createElement('div');
    horizontalLine.classList.add('horizontal-line');
    desktopListing.appendChild(horizontalLine);

  let jobListingFiltersContainer = document.createElement('div');
    jobListingFiltersContainer.classList.add('job-listing-filters-container')
    desktopListing.appendChild(jobListingFiltersContainer);

    listing.filters.forEach((filter) => {
      let filterBtn = document.createElement('div');
      filterBtn.classList.add('filter-btn');
      filterBtn.classList.add('job-listing-filter-btn');
      let filterBtnCopy = document.createElement('p');
      filterBtnCopy.classList.add('filter-btn-copy');
      filterBtnCopy.textContent = filter;
      filterBtn.appendChild(filterBtnCopy);
      jobListingFiltersContainer.appendChild(filterBtn);
    });

  mainContainer.appendChild(jobListing);

})}

// Fetch API call to extract json data
async function getJobListings() {
  const response = await fetch('https://jason-donmoyer.github.io/JSON-Files/job-listing-data.json')
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
      jobListing.role = result[i].role;
      jobListing.level = result[i].level;
      jobListing.postedAt = result[i].postedAt;
      jobListing.filters = result[i].languages.concat(result[i].tools);
      jobListings.push(jobListing);
    }
    updateUI(jobListings);
  })
  .catch(err => {
    console.log(err);
  })
}

   

  console.log(jobListings);



getJobListings();

  

