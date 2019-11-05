import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class SampleBomService {

  constructor() { }

  getTabs() {
    // skip first item
    return _.tail(_.map(this.getSample(), 'value.name'));
  }

  getSample() {
    return [
      {
        value: {
          kind: 4,
          name: 'Style#_Product Name_CW#',
          material: '',
          ID: 13042502
        },
        children: [
          {
            value: {
              kind: 5,
              name: 'Headwear Placement ',
              material: 'Translucent - Human Skin 5 - JB #1',
              ID: 1980967622
            },
            children: [
              {
                value: {
                  kind: 1,
                  name: 'Mle OSFA',
                  material: 'Translucent - Human Skin 5 - JB #1',
                  ID: 14507
                },
                children: [
                  {
                    value: {
                      kind: 1,
                      name: 'Mle OSFA(2390212833)',
                      material: 'Translucent - Human Skin 5 - JB #1',
                      ID: 14508
                    },
                    children: []
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        value: {
          kind: 4,
          name: '001',
          material: '',
          ID: 1314675058
        },
        children: [
          {
            value: {
              kind: 5,
              name: '1356714_UA Luxe Cap_0813',
              material: '',
              ID: 1661
            },
            children: [
              {
                value: {
                  kind: 1,
                  name: 'Back 4 Eyelets',
                  material: 'TT-100105 #4',
                  ID: 460
                },
                children: [
                  {
                    value: {
                      kind: 1,
                      name: 'Back 4 Eyelets(553275DC-3E1F-45FC-9FC9-A70711252921)',
                      material: 'TT-100105 #4',
                      ID: 462
                    },
                    children: []
                  },
                  {
                    value: {
                      kind: 1,
                      name: 'Back 4 Eyelets(7BDECE2B-4EB7-4455-A253-2CBB467BFAA1)',
                      material: 'TT-100105 #4',
                      ID: 464
                    },
                    children: []
                  },
                  {
                    value: {
                      kind: 1,
                      name: 'Back 4 Eyelets(141A59CE-59DD-41B4-978C-513BFE188246)',
                      material: 'TT-100105 #4',
                      ID: 466
                    },
                    children: []
                  },
                  {
                    value: {
                      kind: 1,
                      name: 'Back 4 Eyelets(12671C4E-0CA6-461A-B299-51E6C500759A)',
                      material: 'TT-100105 #4',
                      ID: 468
                    },
                    children: []
                  }
                ]
              },
              {
                value: {
                  kind: 1,
                  name: 'Interior Taping',
                  material: 'WN-212949 #2',
                  ID: 1009
                },
                children: [
                  {
                    value: {
                      kind: 1,
                      name: 'Interior Taping(8A2FF952-BDD3-4E68-AA27-4B3C1D724BC6)',
                      material: 'WN-212949 #2',
                      ID: 1011
                    },
                    children: []
                  }
                ]
              },
              {
                value: {
                  kind: 1,
                  name: 'Interior Taping Stitches',
                  material: 'Stitches_Black',
                  ID: 1012
                },
                children: [
                  {
                    value: {
                      kind: 1,
                      name: 'Interior Taping Stitches(0D425463-FE15-4D2B-B5ED-A40CF60A351A)',
                      material: 'Stitches_Black',
                      ID: 1014
                    },
                    children: []
                  }
                ]
              },
              {
                value: {
                  kind: 1,
                  name: 'Interior Tapint Logo',
                  material: 'WN-212949_1',
                  ID: 1015
                },
                children: [
                  {
                    value: {
                      kind: 1,
                      name: 'Interior Tapint Logo(8CD6920F-CDB2-4FA9-9150-B7ED3DBF587B)',
                      material: 'WN-212949_1',
                      ID: 1017
                    },
                    children: []
                  }
                ]
              },
              {
                value: {
                  kind: 1,
                  name: 'Left Front Panel',
                  material: 'WN-212665 001',
                  ID: 28
                },
                children: [
                  {
                    value: {
                      kind: 1,
                      name: 'Left Front Panel(0AA05E9E-8705-4490-8C4F-3FAED5D3A50F)',
                      material: 'WN-212665 001',
                      ID: 30
                    },
                    children: []
                  }
                ]
              },
              {
                value: {
                  kind: 1,
                  name: 'Right Side Panel',
                  material: 'WN-212665 001',
                  ID: 31
                },
                children: [
                  {
                    value: {
                      kind: 1,
                      name: 'Right Side Panel(944E8521-2E1E-427F-86D0-79A7A93AB1CB)',
                      material: 'WN-212665 001',
                      ID: 33
                    },
                    children: []
                  }
                ]
              },
              {
                value: {
                  kind: 1,
                  name: 'Left Rear Panel',
                  material: 'WN-212665 001',
                  ID: 34
                },
                children: [
                  {
                    value: {
                      kind: 1,
                      name: 'Left Rear Panel(949752EB-40BA-4EA1-BA0E-55024ADC6279)',
                      material: 'WN-212665 001',
                      ID: 36
                    },
                    children: []
                  }
                ]
              },
              {
                value: {
                  kind: 1,
                  name: 'Top Button Outside',
                  material: 'WN-212665 001',
                  ID: 1672
                },
                children: [
                  {
                    value: {
                      kind: 1,
                      name: 'Top Button Outside(55B8F675-2984-4BFD-9CD6-F42414DB13BE)',
                      material: 'WN-212665 001',
                      ID: 1674
                    },
                    children: []
                  }
                ]
              },
              {
                value: {
                  kind: 1,
                  name: 'Top Button Inside',
                  material: '',
                  ID: 1675
                },
                children: [
                  {
                    value: {
                      kind: 1,
                      name: 'Top Button Inside(2B4A0CE2-2BD6-41D3-9C5B-5372C5C60DF4)',
                      material: 'RM-210017',
                      ID: 1677
                    },
                    children: []
                  },
                  {
                    value: {
                      kind: 1,
                      name: 'Top Button Inside(DD432207-59D1-4E5A-AA6C-B948112310B2)',
                      material: 'RM-210017 #1',
                      ID: 1679
                    },
                    children: []
                  }
                ]
              },
              {
                value: {
                  kind: 1,
                  name: 'Panel Inside',
                  material: 'WN-212665 001',
                  ID: 1680
                },
                children: [
                  {
                    value: {
                      kind: 1,
                      name: 'Panel Inside(7DA9E53D-A372-44AB-BE6F-ADCD2F4D24DC)',
                      material: 'WN-212665 001',
                      ID: 1682
                    },
                    children: []
                  }
                ]
              },
              {
                value: {
                  kind: 1,
                  name: 'Front Logo',
                  material: '',
                  ID: 1692
                },
                children: [
                  {
                    value: {
                      kind: 1,
                      name: 'Front Logo(27CE1783-7634-49CB-BE74-BFEBEA1FE10E)',
                      material: 'Stitches_Black',
                      ID: 1694
                    },
                    children: []
                  },
                  {
                    value: {
                      kind: 1,
                      name: 'Front Logo(DFE95E49-57DB-459E-B005-C9A85173FE1F)',
                      material: 'Pat-100596 #1',
                      ID: 1696
                    },
                    children: []
                  }
                ]
              },
              {
                value: {
                  kind: 1,
                  name: 'Front Stitches',
                  material: 'Stitches_Black',
                  ID: 1936
                },
                children: [
                  {
                    value: {
                      kind: 1,
                      name: 'Front Stitches(9D04E4E7-234C-49B1-8A5E-C6FB94E1BDEB)',
                      material: 'Stitches_Black',
                      ID: 1938
                    },
                    children: []
                  }
                ]
              },
              {
                value: {
                  kind: 1,
                  name: 'Back Stitches',
                  material: 'Stitches_Black',
                  ID: 1939
                },
                children: [
                  {
                    value: {
                      kind: 1,
                      name: 'Back Stitches(0B291D2E-53AC-4D19-948F-40A0B07FBFF5)',
                      material: 'Stitches_Black',
                      ID: 1941
                    },
                    children: []
                  },
                  {
                    value: {
                      kind: 1,
                      name: 'Back Stitches(1C835ADA-6643-43DC-B39E-73D4A3E6B0A6)',
                      material: 'Stitches_Black',
                      ID: 1943
                    },
                    children: []
                  }
                ]
              },
              {
                value: {
                  kind: 1,
                  name: 'Upper Visor',
                  material: 'KNT-221319 #1',
                  ID: 1944
                },
                children: [
                  {
                    value: {
                      kind: 1,
                      name: 'Upper Visor(51A72038-D997-4679-BB68-D90FB9C8A6E1)',
                      material: 'KNT-221319 #1',
                      ID: 1946
                    },
                    children: []
                  }
                ]
              },
              {
                value: {
                  kind: 1,
                  name: 'Under Visor',
                  material: 'KNT-221319 #1',
                  ID: 1947
                },
                children: [
                  {
                    value: {
                      kind: 1,
                      name: 'Under Visor(7455EA32-CCB6-4A2D-808D-936C95804B01)',
                      material: 'KNT-221319 #1',
                      ID: 1949
                    },
                    children: []
                  }
                ]
              },
              {
                value: {
                  kind: 1,
                  name: 'Upper Visor Stitches',
                  material: 'Stitches_Black',
                  ID: 1950
                },
                children: [
                  {
                    value: {
                      kind: 1,
                      name: 'Upper Visor Stitches(F34736A3-A6E0-480F-B985-432053A7405C)',
                      material: 'Stitches_Black',
                      ID: 1952
                    },
                    children: []
                  }
                ]
              },
              {
                value: {
                  kind: 1,
                  name: 'Under Visor Stitches',
                  material: 'Stitches_Black',
                  ID: 1953
                },
                children: [
                  {
                    value: {
                      kind: 1,
                      name: 'Under Visor Stitches(1E9BE673-C440-49AB-8982-0F4B5B0D2E06)',
                      material: 'Stitches_Black',
                      ID: 1955
                    },
                    children: []
                  }
                ]
              },
              {
                value: {
                  kind: 1,
                  name: 'Adjustable Band Inside',
                  material: 'Snp-210305 #1',
                  ID: 1956
                },
                children: [
                  {
                    value: {
                      kind: 1,
                      name: 'Adjustable Band Inside(03B677A5-5015-43D4-B2A9-4660BD774702)',
                      material: 'Snp-210305 #1',
                      ID: 1958
                    },
                    children: []
                  },
                  {
                    value: {
                      kind: 1,
                      name: 'Adjustable Band Inside(BDFBD258-8E26-428B-97C7-CB99E06B9A50)',
                      material: 'Snp-210305 #1',
                      ID: 1960
                    },
                    children: []
                  }
                ]
              },
              {
                value: {
                  kind: 1,
                  name: 'Sweatband',
                  material: 'KNT-219210 001',
                  ID: 1964
                },
                children: [
                  {
                    value: {
                      kind: 1,
                      name: 'Sweatband(7DB11E79-A318-4EE7-8548-0B0AAC5485DB)',
                      material: 'KNT-219210 001',
                      ID: 1966
                    },
                    children: []
                  }
                ]
              },
              {
                value: {
                  kind: 1,
                  name: 'Sweatband Stitches',
                  material: 'Stitches_Black',
                  ID: 1967
                },
                children: [
                  {
                    value: {
                      kind: 1,
                      name: 'Sweatband Stitches(C211A1B5-74B8-4029-906F-93B33170E140)',
                      material: 'Stitches_Black',
                      ID: 1969
                    },
                    children: []
                  }
                ]
              },
              {
                value: {
                  kind: 1,
                  name: 'Buckram',
                  material: 'KNT-219210 001 #1',
                  ID: 1970
                },
                children: [
                  {
                    value: {
                      kind: 1,
                      name: 'Buckram(1C1BD524-6AC9-4112-9CC9-D42FE1B25F42)',
                      material: 'KNT-219210 001 #1',
                      ID: 1972
                    },
                    children: []
                  }
                ]
              },
              {
                value: {
                  kind: 1,
                  name: 'Rear Binding',
                  material: 'WN-212665 001 #2',
                  ID: 1979
                },
                children: [
                  {
                    value: {
                      kind: 1,
                      name: 'Rear Binding(B6E89113-B754-4178-B0BE-10464B919ECD)',
                      material: 'WN-212665 001 #2',
                      ID: 1981
                    },
                    children: []
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        value: {
          kind: 4,
          name: '424',
          material: '',
          ID: 361329848
        },
        children: [
          {
            value: {
              kind: 5,
              name: '1356714_UA Luxe Cap_0813',
              material: '',
              ID: 3
            },
            children: [
              {
                value: {
                  kind: 1,
                  name: 'Back 4 Eyelets',
                  material: 'TT-100105_1 424',
                  ID: 438
                },
                children: [
                  {
                    value: {
                      kind: 1,
                      name: 'Back 4 Eyelets(553275DC-3E1F-45FC-9FC9-A70711252921)',
                      material: 'TT-100105_1 424',
                      ID: 440
                    },
                    children: []
                  },
                  {
                    value: {
                      kind: 1,
                      name: 'Back 4 Eyelets(7BDECE2B-4EB7-4455-A253-2CBB467BFAA1)',
                      material: 'TT-100105_1 424',
                      ID: 442
                    },
                    children: []
                  },
                  {
                    value: {
                      kind: 1,
                      name: 'Back 4 Eyelets(141A59CE-59DD-41B4-978C-513BFE188246)',
                      material: 'TT-100105_1 424',
                      ID: 444
                    },
                    children: []
                  },
                  {
                    value: {
                      kind: 1,
                      name: 'Back 4 Eyelets(12671C4E-0CA6-461A-B299-51E6C500759A)',
                      material: 'TT-100105_1 424',
                      ID: 446
                    },
                    children: []
                  }
                ]
              },
              {
                value: {
                  kind: 1,
                  name: 'Interior Taping',
                  material: 'WN-212949 424',
                  ID: 986
                },
                children: [
                  {
                    value: {
                      kind: 1,
                      name: 'Interior Taping(8A2FF952-BDD3-4E68-AA27-4B3C1D724BC6)',
                      material: 'WN-212949 424',
                      ID: 988
                    },
                    children: []
                  }
                ]
              },
              {
                value: {
                  kind: 1,
                  name: 'Interior Taping Stitches',
                  material: 'TT-100105 424',
                  ID: 989
                },
                children: [
                  {
                    value: {
                      kind: 1,
                      name: 'Interior Taping Stitches(0D425463-FE15-4D2B-B5ED-A40CF60A351A)',
                      material: 'TT-100105 424',
                      ID: 991
                    },
                    children: []
                  }
                ]
              },
              {
                value: {
                  kind: 1,
                  name: 'Interior Tapint Logo',
                  material: 'WN-212949_1',
                  ID: 992
                },
                children: [
                  {
                    value: {
                      kind: 1,
                      name: 'Interior Tapint Logo(8CD6920F-CDB2-4FA9-9150-B7ED3DBF587B)',
                      material: 'WN-212949_1',
                      ID: 994
                    },
                    children: []
                  }
                ]
              },
              {
                value: {
                  kind: 1,
                  name: 'Left Front Panel',
                  material: 'WN-212665 424',
                  ID: 4
                },
                children: [
                  {
                    value: {
                      kind: 1,
                      name: 'Left Front Panel(0AA05E9E-8705-4490-8C4F-3FAED5D3A50F)',
                      material: 'WN-212665 424',
                      ID: 6
                    },
                    children: []
                  }
                ]
              },
              {
                value: {
                  kind: 1,
                  name: 'Right Side Panel',
                  material: 'WN-212665 424',
                  ID: 7
                },
                children: [
                  {
                    value: {
                      kind: 1,
                      name: 'Right Side Panel(944E8521-2E1E-427F-86D0-79A7A93AB1CB)',
                      material: 'WN-212665 424',
                      ID: 9
                    },
                    children: []
                  }
                ]
              },
              {
                value: {
                  kind: 1,
                  name: 'Left Rear Panel',
                  material: 'WN-212665 424',
                  ID: 11
                },
                children: [
                  {
                    value: {
                      kind: 1,
                      name: 'Left Rear Panel(949752EB-40BA-4EA1-BA0E-55024ADC6279)',
                      material: 'WN-212665 424',
                      ID: 14
                    },
                    children: []
                  }
                ]
              },
              {
                value: {
                  kind: 1,
                  name: 'Top Button Outside',
                  material: 'WN-212665 424',
                  ID: 15
                },
                children: [
                  {
                    value: {
                      kind: 1,
                      name: 'Top Button Outside(55B8F675-2984-4BFD-9CD6-F42414DB13BE)',
                      material: 'WN-212665 424',
                      ID: 17
                    },
                    children: []
                  }
                ]
              },
              {
                value: {
                  kind: 1,
                  name: 'Top Button Inside',
                  material: '',
                  ID: 18
                },
                children: [
                  {
                    value: {
                      kind: 1,
                      name: 'Top Button Inside(2B4A0CE2-2BD6-41D3-9C5B-5372C5C60DF4)',
                      material: 'RM-210017',
                      ID: 20
                    },
                    children: []
                  },
                  {
                    value: {
                      kind: 1,
                      name: 'Top Button Inside(DD432207-59D1-4E5A-AA6C-B948112310B2)',
                      material: 'RM-210017 #1',
                      ID: 22
                    },
                    children: []
                  }
                ]
              },
              {
                value: {
                  kind: 1,
                  name: 'Panel Inside',
                  material: 'WN-212665 424',
                  ID: 23
                },
                children: [
                  {
                    value: {
                      kind: 1,
                      name: 'Panel Inside(7DA9E53D-A372-44AB-BE6F-ADCD2F4D24DC)',
                      material: 'WN-212665 424',
                      ID: 25
                    },
                    children: []
                  }
                ]
              },
              {
                value: {
                  kind: 1,
                  name: 'Front Logo',
                  material: '',
                  ID: 44
                },
                children: [
                  {
                    value: {
                      kind: 1,
                      name: 'Front Logo(27CE1783-7634-49CB-BE74-BFEBEA1FE10E)',
                      material: 'TT-100105 424 #1',
                      ID: 46
                    },
                    children: []
                  },
                  {
                    value: {
                      kind: 1,
                      name: 'Front Logo(DFE95E49-57DB-459E-B005-C9A85173FE1F)',
                      material: 'Pat-100596 #2',
                      ID: 48
                    },
                    children: []
                  }
                ]
              },
              {
                value: {
                  kind: 1,
                  name: 'Front Stitches',
                  material: 'TT-100105 424',
                  ID: 938
                },
                children: [
                  {
                    value: {
                      kind: 1,
                      name: 'Front Stitches(9D04E4E7-234C-49B1-8A5E-C6FB94E1BDEB)',
                      material: 'TT-100105 424',
                      ID: 940
                    },
                    children: []
                  }
                ]
              },
              {
                value: {
                  kind: 1,
                  name: 'Back Stitches',
                  material: 'TT-100105 424',
                  ID: 941
                },
                children: [
                  {
                    value: {
                      kind: 1,
                      name: 'Back Stitches(0B291D2E-53AC-4D19-948F-40A0B07FBFF5)',
                      material: 'TT-100105 424',
                      ID: 943
                    },
                    children: []
                  },
                  {
                    value: {
                      kind: 1,
                      name: 'Back Stitches(1C835ADA-6643-43DC-B39E-73D4A3E6B0A6)',
                      material: 'TT-100105 424',
                      ID: 945
                    },
                    children: []
                  }
                ]
              },
              {
                value: {
                  kind: 1,
                  name: 'Upper Visor',
                  material: 'KNT-221319 424',
                  ID: 946
                },
                children: [
                  {
                    value: {
                      kind: 1,
                      name: 'Upper Visor(51A72038-D997-4679-BB68-D90FB9C8A6E1)',
                      material: 'KNT-221319 424',
                      ID: 948
                    },
                    children: []
                  }
                ]
              },
              {
                value: {
                  kind: 1,
                  name: 'Under Visor',
                  material: 'KNT-221319 424',
                  ID: 949
                },
                children: [
                  {
                    value: {
                      kind: 1,
                      name: 'Under Visor(7455EA32-CCB6-4A2D-808D-936C95804B01)',
                      material: 'KNT-221319 424',
                      ID: 951
                    },
                    children: []
                  }
                ]
              },
              {
                value: {
                  kind: 1,
                  name: 'Upper Visor Stitches',
                  material: 'TT-100105 424 #1',
                  ID: 952
                },
                children: [
                  {
                    value: {
                      kind: 1,
                      name: 'Upper Visor Stitches(F34736A3-A6E0-480F-B985-432053A7405C)',
                      material: 'TT-100105 424 #1',
                      ID: 954
                    },
                    children: []
                  }
                ]
              },
              {
                value: {
                  kind: 1,
                  name: 'Under Visor Stitches',
                  material: 'TT-100105 424 #1',
                  ID: 955
                },
                children: [
                  {
                    value: {
                      kind: 1,
                      name: 'Under Visor Stitches(1E9BE673-C440-49AB-8982-0F4B5B0D2E06)',
                      material: 'TT-100105 424 #1',
                      ID: 957
                    },
                    children: []
                  }
                ]
              },
              {
                value: {
                  kind: 1,
                  name: 'Adjustable Band Inside',
                  material: 'Snp-210305 #3',
                  ID: 958
                },
                children: [
                  {
                    value: {
                      kind: 1,
                      name: 'Adjustable Band Inside(03B677A5-5015-43D4-B2A9-4660BD774702)',
                      material: 'Snp-210305 #3',
                      ID: 960
                    },
                    children: []
                  },
                  {
                    value: {
                      kind: 1,
                      name: 'Adjustable Band Inside(BDFBD258-8E26-428B-97C7-CB99E06B9A50)',
                      material: 'Snp-210305 #3',
                      ID: 962
                    },
                    children: []
                  }
                ]
              },
              {
                value: {
                  kind: 1,
                  name: 'Sweatband',
                  material: 'KNT-219210 424',
                  ID: 966
                },
                children: [
                  {
                    value: {
                      kind: 1,
                      name: 'Sweatband(7DB11E79-A318-4EE7-8548-0B0AAC5485DB)',
                      material: 'KNT-219210 424',
                      ID: 968
                    },
                    children: []
                  }
                ]
              },
              {
                value: {
                  kind: 1,
                  name: 'Sweatband Stitches',
                  material: 'TT-100105 424 #2',
                  ID: 969
                },
                children: [
                  {
                    value: {
                      kind: 1,
                      name: 'Sweatband Stitches(C211A1B5-74B8-4029-906F-93B33170E140)',
                      material: 'TT-100105 424 #2',
                      ID: 971
                    },
                    children: []
                  }
                ]
              },
              {
                value: {
                  kind: 1,
                  name: 'Buckram',
                  material: 'KNT-219210 424 #1',
                  ID: 972
                },
                children: [
                  {
                    value: {
                      kind: 1,
                      name: 'Buckram(1C1BD524-6AC9-4112-9CC9-D42FE1B25F42)',
                      material: 'KNT-219210 424 #1',
                      ID: 974
                    },
                    children: []
                  }
                ]
              },
              {
                value: {
                  kind: 1,
                  name: 'Rear Binding',
                  material: 'WN-212665 424 #1',
                  ID: 978
                },
                children: [
                  {
                    value: {
                      kind: 1,
                      name: 'Rear Binding(B6E89113-B754-4178-B0BE-10464B919ECD)',
                      material: 'WN-212665 424 #1',
                      ID: 980
                    },
                    children: []
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        value: {
          kind: 4,
          name: '110',
          material: '',
          ID: 361329320
        },
        children: [
          {
            value: {
              kind: 5,
              name: '1356714_UA Luxe Cap_0813',
              material: '',
              ID: 59
            },
            children: [
              {
                value: {
                  kind: 1,
                  name: 'Back 4 Eyelets',
                  material: 'TT-100105 #5',
                  ID: 449
                },
                children: [
                  {
                    value: {
                      kind: 1,
                      name: 'Back 4 Eyelets(553275DC-3E1F-45FC-9FC9-A70711252921)',
                      material: 'TT-100105 #5',
                      ID: 451
                    },
                    children: []
                  },
                  {
                    value: {
                      kind: 1,
                      name: 'Back 4 Eyelets(7BDECE2B-4EB7-4455-A253-2CBB467BFAA1)',
                      material: 'TT-100105 #5',
                      ID: 453
                    },
                    children: []
                  },
                  {
                    value: {
                      kind: 1,
                      name: 'Back 4 Eyelets(141A59CE-59DD-41B4-978C-513BFE188246)',
                      material: 'TT-100105 #5',
                      ID: 455
                    },
                    children: []
                  },
                  {
                    value: {
                      kind: 1,
                      name: 'Back 4 Eyelets(12671C4E-0CA6-461A-B299-51E6C500759A)',
                      material: 'TT-100105 #5',
                      ID: 457
                    },
                    children: []
                  }
                ]
              },
              {
                value: {
                  kind: 1,
                  name: 'Interior Taping',
                  material: 'WN-212949 #3',
                  ID: 997
                },
                children: [
                  {
                    value: {
                      kind: 1,
                      name: 'Interior Taping(8A2FF952-BDD3-4E68-AA27-4B3C1D724BC6)',
                      material: 'WN-212949 #3',
                      ID: 999
                    },
                    children: []
                  }
                ]
              },
              {
                value: {
                  kind: 1,
                  name: 'Interior Taping Stitches',
                  material: 'TT-100105 110 #2',
                  ID: 1000
                },
                children: [
                  {
                    value: {
                      kind: 1,
                      name: 'Interior Taping Stitches(0D425463-FE15-4D2B-B5ED-A40CF60A351A)',
                      material: 'TT-100105 110 #2',
                      ID: 1002
                    },
                    children: []
                  }
                ]
              },
              {
                value: {
                  kind: 1,
                  name: 'Interior Tapint Logo',
                  material: 'WN-212949_1',
                  ID: 1003
                },
                children: [
                  {
                    value: {
                      kind: 1,
                      name: 'Interior Tapint Logo(8CD6920F-CDB2-4FA9-9150-B7ED3DBF587B)',
                      material: 'WN-212949_1',
                      ID: 1005
                    },
                    children: []
                  }
                ]
              },
              {
                value: {
                  kind: 1,
                  name: 'Left Front Panel',
                  material: 'WN-212665 110',
                  ID: 60
                },
                children: [
                  {
                    value: {
                      kind: 1,
                      name: 'Left Front Panel(0AA05E9E-8705-4490-8C4F-3FAED5D3A50F)',
                      material: 'WN-212665 110',
                      ID: 62
                    },
                    children: []
                  }
                ]
              },
              {
                value: {
                  kind: 1,
                  name: 'Right Side Panel',
                  material: 'WN-212665 110',
                  ID: 63
                },
                children: [
                  {
                    value: {
                      kind: 1,
                      name: 'Right Side Panel(944E8521-2E1E-427F-86D0-79A7A93AB1CB)',
                      material: 'WN-212665 110',
                      ID: 65
                    },
                    children: []
                  }
                ]
              },
              {
                value: {
                  kind: 1,
                  name: 'Left Rear Panel',
                  material: 'WN-212665 110',
                  ID: 66
                },
                children: [
                  {
                    value: {
                      kind: 1,
                      name: 'Left Rear Panel(949752EB-40BA-4EA1-BA0E-55024ADC6279)',
                      material: 'WN-212665 110',
                      ID: 68
                    },
                    children: []
                  }
                ]
              },
              {
                value: {
                  kind: 1,
                  name: 'Top Button Outside',
                  material: 'WN-212665 110',
                  ID: 69
                },
                children: [
                  {
                    value: {
                      kind: 1,
                      name: 'Top Button Outside(55B8F675-2984-4BFD-9CD6-F42414DB13BE)',
                      material: 'WN-212665 110',
                      ID: 71
                    },
                    children: []
                  }
                ]
              },
              {
                value: {
                  kind: 1,
                  name: 'Top Button Inside',
                  material: '',
                  ID: 72
                },
                children: [
                  {
                    value: {
                      kind: 1,
                      name: 'Top Button Inside(2B4A0CE2-2BD6-41D3-9C5B-5372C5C60DF4)',
                      material: 'RM-210017',
                      ID: 74
                    },
                    children: []
                  },
                  {
                    value: {
                      kind: 1,
                      name: 'Top Button Inside(DD432207-59D1-4E5A-AA6C-B948112310B2)',
                      material: 'RM-210017 #1',
                      ID: 76
                    },
                    children: []
                  }
                ]
              },
              {
                value: {
                  kind: 1,
                  name: 'Panel Inside',
                  material: 'WN-212665 110 #1',
                  ID: 77
                },
                children: [
                  {
                    value: {
                      kind: 1,
                      name: 'Panel Inside(7DA9E53D-A372-44AB-BE6F-ADCD2F4D24DC)',
                      material: 'WN-212665 110 #1',
                      ID: 79
                    },
                    children: []
                  }
                ]
              },
              {
                value: {
                  kind: 1,
                  name: 'Front Logo',
                  material: '',
                  ID: 89
                },
                children: [
                  {
                    value: {
                      kind: 1,
                      name: 'Front Logo(27CE1783-7634-49CB-BE74-BFEBEA1FE10E)',
                      material: 'TT-100105 110',
                      ID: 91
                    },
                    children: []
                  },
                  {
                    value: {
                      kind: 1,
                      name: 'Front Logo(DFE95E49-57DB-459E-B005-C9A85173FE1F)',
                      material: 'Pat-100596 110',
                      ID: 93
                    },
                    children: []
                  }
                ]
              },
              {
                value: {
                  kind: 1,
                  name: 'Front Stitches',
                  material: 'TT-100105 110 #2',
                  ID: 336
                },
                children: [
                  {
                    value: {
                      kind: 1,
                      name: 'Front Stitches(9D04E4E7-234C-49B1-8A5E-C6FB94E1BDEB)',
                      material: 'TT-100105 110 #2',
                      ID: 338
                    },
                    children: []
                  }
                ]
              },
              {
                value: {
                  kind: 1,
                  name: 'Back Stitches',
                  material: 'TT-100105 110 #2',
                  ID: 339
                },
                children: [
                  {
                    value: {
                      kind: 1,
                      name: 'Back Stitches(0B291D2E-53AC-4D19-948F-40A0B07FBFF5)',
                      material: 'TT-100105 110 #2',
                      ID: 341
                    },
                    children: []
                  },
                  {
                    value: {
                      kind: 1,
                      name: 'Back Stitches(1C835ADA-6643-43DC-B39E-73D4A3E6B0A6)',
                      material: 'TT-100105 110 #2',
                      ID: 343
                    },
                    children: []
                  }
                ]
              },
              {
                value: {
                  kind: 1,
                  name: 'Upper Visor',
                  material: 'KNT-221319 #2',
                  ID: 344
                },
                children: [
                  {
                    value: {
                      kind: 1,
                      name: 'Upper Visor(51A72038-D997-4679-BB68-D90FB9C8A6E1)',
                      material: 'KNT-221319 #2',
                      ID: 346
                    },
                    children: []
                  }
                ]
              },
              {
                value: {
                  kind: 1,
                  name: 'Under Visor',
                  material: 'KNT-221319 #2',
                  ID: 347
                },
                children: [
                  {
                    value: {
                      kind: 1,
                      name: 'Under Visor(7455EA32-CCB6-4A2D-808D-936C95804B01)',
                      material: 'KNT-221319 #2',
                      ID: 385
                    },
                    children: []
                  }
                ]
              },
              {
                value: {
                  kind: 1,
                  name: 'Upper Visor Stitches',
                  material: 'TT-100105 110',
                  ID: 386
                },
                children: [
                  {
                    value: {
                      kind: 1,
                      name: 'Upper Visor Stitches(F34736A3-A6E0-480F-B985-432053A7405C)',
                      material: 'TT-100105 110',
                      ID: 422
                    },
                    children: []
                  }
                ]
              },
              {
                value: {
                  kind: 1,
                  name: 'Under Visor Stitches',
                  material: 'TT-100105 110',
                  ID: 423
                },
                children: [
                  {
                    value: {
                      kind: 1,
                      name: 'Under Visor Stitches(1E9BE673-C440-49AB-8982-0F4B5B0D2E06)',
                      material: 'TT-100105 110',
                      ID: 673
                    },
                    children: []
                  }
                ]
              },
              {
                value: {
                  kind: 1,
                  name: 'Adjustable Band Inside',
                  material: 'Snp-210305 #2',
                  ID: 674
                },
                children: [
                  {
                    value: {
                      kind: 1,
                      name: 'Adjustable Band Inside(03B677A5-5015-43D4-B2A9-4660BD774702)',
                      material: 'Snp-210305 #2',
                      ID: 676
                    },
                    children: []
                  },
                  {
                    value: {
                      kind: 1,
                      name: 'Adjustable Band Inside(BDFBD258-8E26-428B-97C7-CB99E06B9A50)',
                      material: 'Snp-210305 #2',
                      ID: 678
                    },
                    children: []
                  }
                ]
              },
              {
                value: {
                  kind: 1,
                  name: 'Sweatband',
                  material: 'KNT-219210 001 #2',
                  ID: 682
                },
                children: [
                  {
                    value: {
                      kind: 1,
                      name: 'Sweatband(7DB11E79-A318-4EE7-8548-0B0AAC5485DB)',
                      material: 'KNT-219210 001 #2',
                      ID: 684
                    },
                    children: []
                  }
                ]
              },
              {
                value: {
                  kind: 1,
                  name: 'Sweatband Stitches',
                  material: 'TT-100105 110 #1',
                  ID: 694
                },
                children: [
                  {
                    value: {
                      kind: 1,
                      name: 'Sweatband Stitches(C211A1B5-74B8-4029-906F-93B33170E140)',
                      material: 'TT-100105 110 #1',
                      ID: 696
                    },
                    children: []
                  }
                ]
              },
              {
                value: {
                  kind: 1,
                  name: 'Buckram',
                  material: 'KNT-219210 001 #3',
                  ID: 697
                },
                children: [
                  {
                    value: {
                      kind: 1,
                      name: 'Buckram(1C1BD524-6AC9-4112-9CC9-D42FE1B25F42)',
                      material: 'KNT-219210 001 #3',
                      ID: 699
                    },
                    children: []
                  }
                ]
              },
              {
                value: {
                  kind: 1,
                  name: 'Rear Binding',
                  material: 'WN-212665 110',
                  ID: 703
                },
                children: [
                  {
                    value: {
                      kind: 1,
                      name: 'Rear Binding(B6E89113-B754-4178-B0BE-10464B919ECD)',
                      material: 'WN-212665 110',
                      ID: 705
                    },
                    children: []
                  }
                ]
              }
            ]
          }
        ]
      }
    ];
  }
}
