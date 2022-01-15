// array to hold job listing information
const jobListings = [];

const mainContainer = document.getElementById('main-container');

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
    
    jobListing.appendChild(jobListingDescriptionContainer);
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



  mainContainer.appendChild(jobListing);

})}

// Fetch API call to extract json data
async function getJobListings() {
  const response = await fetch('../data.json')
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
    updateUI(jobListings);
  })
  .catch(err => {
    console.log(err);
  })
}

   

  console.log(jobListings);



getJobListings();

  

{/* <article class="job-listing-container featured-listing-border">
    

    <div class="company-logo"></div>
    <div class="job-listing-desktop-container">
    <div class="job-listing-description-container">
      <div class="job-listing-features-container">
        <h2 class="company-name">Photosnap</h2>
        <div class="features-container">
          <div class="listing-container new-listing-container">
            <h3 class="listing">New!</h3>
          </div>
          <div class="listing-container featured-listing-container">
            <h3 class="listing">Featured</h3>
          </div>
        </div>
      </div>
      
      <h1 class="job-title">Senior Frontend Developer</h1>
      
      <div class="job-listing-info-container">
        <h4 class="job-info">1d ago</h4> 
        <div class="small-circle"></div>
        <h4 class="job-info">Full Time</h4>
        <div class="small-circle"></div>
        <h4 class="job-info">USA only</h4>
      </div>
      
    </div>
    
    <div class="horizontal-line"></div>

    <div class="job-listing-filters-container">
      <!-- Role -->
      <div class="filter-btn job-listing-filter-btn">
        <p class="filter-btn-copy">Frontend</p>
      </div>
      
      <!-- Level -->
      <div class="filter-btn job-listing-filter-btn">
        <p class="filter-btn-copy">Senior</p>
      </div>
      
      <!-- Languages -->
      <div class="filter-btn job-listing-filter-btn">
        <p class="filter-btn-copy">HTML</p>
      </div>

      
      
    </div>
  </div>

  </article> */}


