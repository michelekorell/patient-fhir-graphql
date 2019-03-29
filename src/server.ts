import { ApolloServer, gql } from 'apollo-server';
import { patientSchema } from './graphql/patient'

// This is a (sample) collection of books we'll be able to query
// the GraphQL server for.  A more complete example might fetch
// from an existing data source like a REST API or database.
const patient = JSON.parse(`{
    "maritalStatus": {
      "text": "S",
      "coding": [
        {
          "code": "S",
          "system": "http://hl7.org/fhir/v3/MaritalStatus",
          "display": "S"
        }
      ]
    },
    "id": "d3af67c9-0c02-45f2-bc91-fea45af3ee83",
    "identifier": [
      {
        "value": "803f5907-5427-4930-a093-1a95190de7fd",
        "system": "https://github.com/synthetichealth/synthea"
      },
      {
        "type": {
          "text": "Medical Record Number",
          "coding": [
            {
              "code": "MR",
              "system": "http://hl7.org/fhir/v2/0203",
              "display": "Medical Record Number"
            }
          ]
        },
        "value": "803f5907-5427-4930-a093-1a95190de7fd",
        "system": "http://hospital.smarthealthit.org"
      },
      {
        "system": "http://hl7.org/fhir/sid/us-ssn",
        "type": {
          "text": "Social Security Number",
          "coding": [
            {
              "code": "SB",
              "system": "http://hl7.org/fhir/identifier-type",
              "display": "Social Security Number"
            }
          ]
        },
        "value": "999-81-4006"
      },
      {
        "value": "S99988684",
        "system": "urn:oid:2.16.840.1.113883.4.3.25",
        "type": {
          "text": "Driver's License",
          "coding": [
            {
              "code": "DL",
              "system": "http://hl7.org/fhir/v2/0203",
              "display": "Driver's License"
            }
          ]
        }
      },
      {
        "type": {
          "text": "Passport Number",
          "coding": [
            {
              "code": "PPN",
              "system": "http://hl7.org/fhir/v2/0203",
              "display": "Passport Number"
            }
          ]
        },
        "value": "X17148555X",
        "system": "http://standardhealthrecord.org/fhir/StructureDefinition/passportNumber"
      }
    ],
    "multipleBirth": {
      "boolean": false
    },
    "text": {
      "div": "<div>not working for graphql example</div>",
      "status": "generated"
    },
    "gender": "male",
    "birthDate": "1955-06-27",
    "resourceType": "Patient",
    "communication": [
      {
        "language": {
          "text": "English",
          "coding": [
            {
              "code": "en-US",
              "system": "urn:ietf:bcp:47",
              "display": "English"
            }
          ]
        }
      }
    ],
    "meta": {
      "profile": [
        "http://standardhealthrecord.org/fhir/StructureDefinition/shr-entity-Patient"
      ]
    },
    "name": [
      {
        "use": "official",
        "given": [
          "Abram53"
        ],
        "family": "Hickle134",
        "prefix": [
          "Mr."
        ]
      }
    ],
    "extension": [
      {
        "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-race",
        "extension": [
          {
            "url": "ombCategory",
            "valueCoding": {
              "system": "urn:oid:2.16.840.1.113883.6.238",
              "display": "White",
              "code": "2106-3"
            }
          },
          {
            "url": "text",
            "valueString": "White"
          }
        ]
      },
      {
        "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity",
        "extension": [
          {
            "url": "ombCategory",
            "valueCoding": {
              "display": "Not Hispanic or Latino",
              "code": "2186-5",
              "system": "urn:oid:2.16.840.1.113883.6.238"
            }
          },
          {
            "valueString": "Not Hispanic or Latino",
            "url": "text"
          }
        ]
      },
      {
        "url": "http://hl7.org/fhir/StructureDefinition/patient-mothersMaidenName",
        "valueString": "Sharolyn456 Harris789"
      },
      {
        "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex",
        "valueCode": "M"
      },
      {
        "url": "http://hl7.org/fhir/StructureDefinition/birthPlace",
        "valueAddress": {
          "country": "US",
          "city": "Boston",
          "state": "Massachusetts"
        }
      },
      {
        "url": "http://standardhealthrecord.org/fhir/StructureDefinition/shr-actor-FictionalPerson-extension",
        "valueBoolean": true
      },
      {
        "valueHumanName": {
          "text": "Samual455 Hickle134"
        },
        "url": "http://standardhealthrecord.org/fhir/StructureDefinition/shr-entity-FathersName-extension"
      },
      {
        "url": "http://standardhealthrecord.org/fhir/StructureDefinition/shr-demographics-SocialSecurityNumber-extension",
        "valueString": "999-81-4006"
      },
      {
        "url": "http://standardhealthrecord.org/fhir/StructureDefinition/shr-entity-Person-extension",
        "valueReference": {
          "reference": "Basic/bad528f4-fa8a-4f5b-a478-1b630be88847"
        }
      },
      {
        "url": "http://synthetichealth.github.io/synthea/disability-adjusted-life-years",
        "valueDecimal": 0
      },
      {
        "url": "http://synthetichealth.github.io/synthea/quality-adjusted-life-years",
        "valueDecimal": 62
      }
    ],
    "address": [
      {
        "postalCode": "02301",
        "city": "Brockton",
        "line": [
          "730 Schoen Center Apt 8"
        ],
        "state": "Massachusetts",
        "country": "US",
        "extension": [
          {
            "url": "http://hl7.org/fhir/StructureDefinition/geolocation",
            "extension": [
              {
                "url": "latitude",
                "valueDecimal": -71.024638
              },
              {
                "url": "longitude",
                "valueDecimal": 42.082543
              }
            ]
          }
        ]
      }
    ],
    "telecom": [
      {
        "use": "home",
        "value": "555-696-1511",
        "system": "phone"
      }
    ]
  }`);

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
/*const typeDefs = gql`
  # Comments in GraphQL are defined with the hash (#) symbol.

  # This "Book" type can be used in other type declarations.
  type Book {
    title: String
    author: String
  }

  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  type Query {
    books: [Book]
  }
`;*/

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
const resolvers = {
    Query: {
    Patient: () => patient,
  },
};

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({ typeDefs: patientSchema, resolvers });

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});