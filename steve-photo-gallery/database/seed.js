const db = require('./index.js');
const Photo = require('./Photo.js');
const faker = require('faker');

const photoUrls = ['accommodation-apartment-bed-279805.jpg', 'activity-bicycle-bike-276517.jpg', 'adorable-animal-canine-164446.jpg', 'afternoon-backyard-basket-698897.jpg', 'afternoon-chair-daylight-821357.jpg', 'alley-architecture-building-190407.jpg', 'ancient-architecture-barn-314937.jpg', 'ancient-architecture-building-417321.jpg', 'apartment-apple-business-245032.jpg', 'apartment-architectural-architecture-273669.jpg', 'apartment-architectural-bedroom-276508.jpg', 'apartment-architectural-design-architecture-279614.jpg', 'apartment-architecture-armchair-271805.jpg', 'apartment-architecture-art-276724.jpg', 'apartment-architecture-artist-447592.jpg', 'apartment-architecture-atmosphere-271676.jpg', 'apartment-architecture-beautiful-261426.jpg', 'apartment-architecture-bed-276671.jpg', 'apartment-architecture-bed-358527.jpg', 'apartment-architecture-bedroom-276733.jpg', 'apartment-architecture-bedroom-892618.jpg', 'apartment-architecture-bicycle-532248.jpg', 'apartment-architecture-block-534124.jpg', 'apartment-architecture-bookcase-257344.jpg', 'apartment-architecture-bookcase-271795.jpg', 'apartment-architecture-bookcase-271816.jpg', 'apartment-architecture-brick-140511.jpg', 'apartment-architecture-cabinet-273843.jpg', 'apartment-architecture-carpet-276583.jpg', 'apartment-architecture-ceiling-259962.jpg', 'apartment-architecture-ceiling-271647.jpg', 'apartment-architecture-ceiling-271724.jpg', 'apartment-architecture-chair-210552.jpg', 'apartment-architecture-chair-265097.jpg', 'apartment-architecture-chair-756076.jpg', 'apartment-architecture-chairs-269218.jpg', 'apartment-architecture-contemporary-271722.jpg', 'apartment-architecture-contemporary-922796.jpg', 'apartment-bed-bedroom-271618.jpg', 'apartment-bed-bedroom-439227.jpg', 'apartment-bed-bedroom-462235.jpg', 'apartment-bed-bedroom-545034.jpg', 'apartment-bed-chair-271674.jpg', 'apartment-beverage-bottle-544112.jpg', 'apartment-cabinets-chairs-276670.jpg', 'apartment-ceiling-chair-263201.jpg', 'apartment-chair-clean-263189.jpg', 'apartment-chair-clean-276686.jpg', 'apartment-chair-comfort-271614.jpg', 'apartment-chair-comfort-276700.jpg', 'apartment-chair-contemporary-276625.jpg', 'apartment-chair-contemporary-9538.jpg', 'apartment-chair-couch-276715.jpg', 'apartment-chairs-decor-709767.jpg', 'apartment-comfort-contemporary-271800.jpg', 'apartment-condo-condominium-275484.jpg', 'apartment-couch-cozy-198272.jpg', 'apartment-design-home-4703.jpg', 'appliance-cabinets-contemporary-280218.jpg', 'architectural-bedroom-casablanca-53603.jpg', 'architectural-design-architecture-brick-wall-422844.jpg', 'architectural-design-architecture-ceiling-380768.jpg', 'architecture-backyard-brickwalls-221024.jpg', 'architecture-bed-bedroom-271743.jpg', 'architecture-brazil-buildings-688565.jpg', 'architecture-bridge-chairs-261410.jpg', 'architecture-building-business-280492.jpg', 'architecture-building-castle-208676.jpg', 'architecture-building-castle-534095.jpg', 'architecture-building-conifers-271622.jpg', 'architecture-building-daylight-287720.jpg', 'architecture-building-daylight-70493.jpg', 'architecture-building-decoration-408847.jpg', 'architecture-building-home-209274.jpg', 'architecture-building-home-280216.jpg', 'architecture-bungalow-chimney-731082.jpg', 'architecture-bungalow-grass-259752.jpg', 'architecture-bushes-chimneys-208736.jpg', 'architecture-business-chair-5697.jpg', 'architecture-carpet-chair-276534.jpg', 'architecture-chair-furniture-279640.jpg', 'architecture-chairs-decoration-280239.jpg', 'architecture-chairs-floor-271632.jpg', 'architecture-chandelier-clean-210463.jpg', 'architecture-contemporary-couch-279607.jpg', 'architecture-contemporary-daylight-210547.jpg', 'architecture-countryside-daylight-242258.jpg', 'architecture-entrance-home-276630.jpg', 'architecture-garden-grass-210558.jpg', 'architecture-hotel-pool-261327.jpg', 'art-background-decoration-354939.jpg', 'art-blank-business-139764.jpg', 'art-cabinet-decoration-706144.jpg', 'autumn-colorful-colourful-33109.jpg', 'backlit-dawn-dusk-170638.jpg', 'bags-books-design-683929.jpg', 'bed-bedroom-blanket-545012.jpg', 'bed-bedroom-ceiling-262048.jpg', 'bed-bedroom-chair-210265.jpg', 'bed-bedroom-clean-775219.jpg', 'bed-bedroom-clean-833046.jpg', 'bed-bedroom-comfort-763148.jpg', 'bed-bedroom-contemporary-271655.jpg', 'bed-bedroom-furniture-271616.jpg', 'bed-bedroom-hostel-4217.jpg', 'bench-carved-stones-cemetery-257360.jpg', 'blur-bottle-bright-273238.jpg', 'blur-breakfast-chair-209438.jpg', 'book-stack-bookcase-books-877971.jpg', 'bookcase-bookshelves-chairs-609768.jpg', 'books-bookshelf-chairs-276651.jpg', 'books-chair-clock-707196.jpg', 'bowl-cabinets-ceiling-813688.jpg', 'brick-clean-color-905198.jpg', 'building-ceiling-classroom-373488.jpg', 'building-chair-comfort-276528.jpg', 'business-chairs-contemporary-210620.jpg', 'cabinet-contemporary-cups-279618.jpg', 'candle-chairs-cup-909504.jpg', 'cemetery-chair-countryside-116910.jpg', 'chair-decor-decoration-433200.jpg', 'chairs-comfort-cups-358572.jpg', 'chairs-contemporary-decoration-930004.jpg', 'chairs-dining-room-dinner-460537.jpg', 'chairs-furniture-home-271753.jpg', 'contemporary-family-furniture-189295.jpg', 'contemporary-furniture-home-271734.jpg', 'daylight-holidays-hotel-261156.jpg', 'furniture-home-house-276696.jpg'];

const mockPhotos = [];
for (let i = 1; i <= 100; i++) {
  let randPhotoNums = [];
  while (randPhotoNums.length < 30) {
    let num = Math.floor(Math.random() * photoUrls.length);
    if (!randPhotoNums.includes(num)) {
      randPhotoNums.push(num);
    }
  }
  for (let j = 0; j < 30; j++) {
    let obj = {};
    obj.title = faker.lorem.words();
    obj.isVerified = faker.random.boolean();
    obj.listingId = i;
    obj.photoUrl = `https://s3-us-west-1.amazonaws.com/wandcphotogallery/${photoUrls[randPhotoNums[j]]}`;
    obj.thumbnailUrl = `https://s3-us-west-1.amazonaws.com/wandcphotogalleryresized/resized-${photoUrls[randPhotoNums[j]]}`;
    mockPhotos.push(obj);
  }
}

const insertMockPhotos = () => {
  Photo.create(mockPhotos)
    .then(() => db.disconnect());
};

insertMockPhotos();

