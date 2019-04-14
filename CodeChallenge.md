# Display Sweet

> Please design a simple schema with Entity Framework *Core* based on given scenario.
> 1. Navigation is a structure that stores components in a tree form. First level has at most 8 components, each node at first level contains at most 7 sub-components.
> 2. Components json stores the components that used in Navigation struct. Two entities maintain the relation through the Id of the component.

## Questions
> 1. The implementation of Navigation entity class
> 2. The implementation of Component entity class
> 3. The design of relationship between two entities
> 4. Implement *web api endpoints* to generate the output against given structures
> 5. Please provide a set of seeding data for your implementation

## Navigation Json

```.json
{
  "navigation":{
    "2199fb7e-b249-4a22-acab-221a677cee9b":{
      "children":{
        "cff20369-bb02-4720-b1e9-8870f54d0073":{
          "index":0,
          "parentId":"2199fb7e-b249-4a22-acab-221a677cee9b",
          "template":"templateString",
          "type":"typeString"
        },
        "c4e14101-9713-463a-b028-deb23c9f38bf":{
          "index":1,
          "parentId":"2199fb7e-b249-4a22-acab-221a677cee9b",
          "template":"templateString",
          "type":"typeString"
        }
      },
      "index":0,
      "type":"string"
    },
    "6c673c1f-8345-4d5c-9652-cca03d56a3ac":{
      "children":{
        "85c703dd-4887-4e9d-a1b7-14022958860b":{
          "parentId":"6c673c1f-8345-4d5c-9652-cca03d56a3ac",
          "template":"templateString",
          "type":"typeString"
        }
      },
      "index":0,
      "type":"string"
    }
  }
}

```

## Components Json

```.json
{
  "components":{
    "cff20369-bb02-4720-b1e9-8870f54d0073":{
      "data":{
        "0":{
          "asset":"urlString",
          "caption":{
            "language_0":"string",
            "language_1":"string"
          }
        },
        "1":{
          "asset":"urlString",
          "caption":{
            "language_0":"string",
            "language_1":"string"
          }
        }
      },
      "type":"string"
    },
    "c4e14101-9713-463a-b028-deb23c9f38bf":{
      "data":{
        "0":{
          "styles":{
            "0":{
              "asset":"urlString",
              "name":{
                "language_0":"string",
                "language_1":"string"
              }
            },
            "1":{
              "asset":"urlString",
              "nmae":{
                "language_0":"string",
                "language_1":"string"
              }
            }
          },
          "type":"typeString"
        }
      }
    },
    "85c703dd-4887-4e9d-a1b7-14022958860b":{
      "data":{
        "companyLogo":"urlString",
        "mainImage":"urlString"
      },
      "type":"string"
    }
  }
}

```