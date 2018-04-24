var fs = require('fs');
var jsf = require('json-schema-faker');

var schema = {
  type: 'object',
  properties: {
    _id: 0,
    name: {
      type: 'string',
      faker: 'lorem.words',
    },
    location: {
      type: 'string',
      faker: 'address.city',
    },
    address: {
      type: 'string',
      faker: {
        fake: '{{address.streetAddress}}, {{address.city}}, {{address.state}}, {{address.country}}'
      },
    },
    type: {
      type: 'string',
      faker: {
        'random.arrayElement': [['Entire house', 'Entire guesthouse', 'Entire Cabin','Private bedroom', 'Shared bedroom']],
      },
    },
    maxNumOfGuests: {
      $ref: '#/definitions/positiveInt',
    },
    numOfBeds: {
      $ref: '#/definitions/positiveInt',
    },
    numOfBaths: {
      $ref: '#/definitions/positiveInt',
    },
    hostName: {
      type: 'string',
      faker: 'name.findName',
    },
    hostPic: {
      type: 'string',
      faker: 'image.imageUrl',
    },
    amenities: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          amenityType: {
            type: 'string',
            faker: {
              'random.arrayElement': [['Basic', 'Facilities', 'Dining','Guest access','Bed & bath','Safety']],
            },
          },
          amenityValue: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                  faker: {
                    'random.arrayElement': [['Wifi', 'Laptop friendly workspace', 'Free parking on premises','Kitchen','Hot tub','TV']]
                  },
                },
                value: {
                  type: 'string',
                  faker: 'lorem.sentence',
                },
              },
              required: ['name', 'value'],
            },
          },
        },
        required: ['amenityType', 'amenityValue'],
      },
    },
    notIncludedAmenities: {
      type: 'array',
      items: {
        type: 'string',
        faker: 'lorem.word',
      },
    },
    sleepingArrangements: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            faker: {
              'random.arrayElement': [['Bedroom1', 'Bedroom2', 'Bedroom3', 'Bedroom4', 'Bedroom5', 'Common space']]
            },
          },
          value: {
            type: 'string',
            faker: {
              'random.arrayElement': [['1 king bed', '2 queen beds', '2 king beds', '1 sofa bed', '3 queen beds', '2 sofa beds', '1 king bed, 2 queen beds', '2 queen beds, 1 sofa bed']]
            },
          },
        },
        required: ['name', 'value'],
      },
    },
    houseRules: {
      type: 'object',
      properties: {
        basicRules: {
          type: 'array',
          items: {
            type: 'string',
            faker: 'lorem.sentence',
          },
        },
        textBody: {
          type: 'string',
          faker: 'lorem.paragraphs',
        },
      },
      required: ['basicRules','textBody'],
    },
    cancellationPolicy: {
      type: 'object',
      properties: {
        policyType: {
          type: 'string',
          faker: {
              'random.arrayElement': [['Strict', 'Super Strict 30 Days', 'Super Strict 60 Days', 'Moderate', 'Flexible', 'Long Term', 'Strict(Grace Period)']]
          },
        },
        description: {
          type: 'string',
          faker: 'lorem.paragraph',
        },
        link: {
          type: 'string',
          faker: 'internet.url',
        },
      },
      required: ['policyType','description','link'],
    },
    aboutHome: {
      type: 'object',
      properties: {
        summary: {
          type: 'string',
          faker: 'lorem.paragraph',
        },
        space: {
          type: 'string',
          faker: 'lorem.paragraphs',
        },
        guestAccess: {
          type: 'string',
          faker: 'lorem.paragraphs',
        },
        interactionWithGuests: {
          type: 'string',
          faker: 'lorem.paragraphs',
        },
        otherNotes: {
          type: 'string',
          faker: 'lorem.paragraphs',
        },
      },
      required: ['summary','space','guestAccess','interactionWithGuests','otherNotes']
    },
  },
  required: ['_id','name','location','address','type','maxNumOfGuests','numOfBeds','numOfBaths','hostName','hostPic','user','amenities','notIncludedAmenities','sleepingArrangements','houseRules','cancellationPolicy','aboutHome'],
  definitions: {
    positiveInt: {
      type: 'integer',
      minimum: 0,
      maximum: 10,
      exclusiveMinimum: true
    },
    id: {
      type: 'integer',
      minimum: 3,
      exclusiveMinimum: true,
    }
  },
};

jsf.extend('faker', function() {
  return require('faker');
});

var removeDuplicateAmenities = function(sample) {
  var obj = {};
  for (var i = 0; i < sample.amenities.length; i++) {
    obj[sample.amenities[i].amenityType] = sample.amenities[i];
  }
  sample.amenities = new Array();
  for (var key in obj) {
    sample.amenities.push(obj[key]);
  }
}

var removeDuplicateAmenitiesValues = function(sample) {
  var mySet = new Set();
  for (var i = 0; i < sample.amenities.length; i++) {
    var newAmenityValueArr = [];
    for (var j = 0; j < sample.amenities[i].amenityValue.length; j++) {
      var amenityName = sample.amenities[i].amenityValue[j].name;
      if (!mySet.has(amenityName)) {
        mySet.add(amenityName);
        newAmenityValueArr.push(sample.amenities[i].amenityValue[j]);
      }
    }
    sample.amenities[i].amenityValue = newAmenityValueArr;
  }
}

var removeDuplicateSleepingArrangements = function(sample) {
  var obj = {};
  for (var i = 0; i < sample.sleepingArrangements.length; i++) {
    obj[sample.sleepingArrangements[i].name] = sample.sleepingArrangements[i];
  }
  sample.sleepingArrangements = new Array();
  for (var key in obj) {
    sample.sleepingArrangements.push(obj[key]);
  }
}

var generate100Items = function(id) {
  for (var i = 0; i < 100; i++) {
    jsf.resolve(schema).then(function(sample) {
      id++;
      sample._id = id;
      removeDuplicateAmenities(sample);
      removeDuplicateAmenitiesValues(sample);
      removeDuplicateSleepingArrangements(sample);
      var stringifiedSample = JSON.stringify(sample);
      fs.writeFile('/Users/Shiyao/hrsf92/shiyao-listingDescription/db/fakeData/' + id + '.json', stringifiedSample, (err) => {
        if (err) {
          throw err;
        } 
        console.log('success!!!!');
      });
    });
  }
}

generate100Items(2);

