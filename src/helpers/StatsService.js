const baseURL = "http://api.coronavirus.data.gov.uk/v1/data?";

export default {
  getData(structureString) {
    let filterString = "areaType=nation;areaName=Scotland";
    // let structureString = {};
    const search =
      baseURL +
      "filters=" +
      filterString +
      "&structure={" +
      structureString +
      "}";
    console.log(search);
    return fetch(search).then((res) => res.json());
  },
};

//filters = areaType, areaName, date
//e.g. filters=areaType=nation;areaName=england;date=2020-08-01

//structure =
//e.g. &structure=

// structure elements and availablity:
// "newCasesByPublishDate", NATION, UTLA
// "cumCasesByPublishDate", NATION, UTLA
// "newCasesBySpecimenDate", NATION, REGION, UTLA
// "cumCasesBySpecimenDate", NATION, REGION, UTLA
// "maleCases", NATION (BY AGE)
// "femaleCases", NATION (BY AGE)
// "newAdmissions", NATION
// "cumAdmissions", NATION
// "cumAdmissionsByAge", NATION
// "cumTestsByPublishDate", NATION
// "newTestsByPublishDate", NATION
// "covidOccupiedMVBeds", NATION
// "hospitalCases", NATION
// "plannedCapacityByPublishDate", NATION
// "newDeathsByPublishDate", NATION, UTLA
// "cumDeathsByPublishDate", NATION
// "newDeathsByDeathDate", NATION, REGION
// "cumDeathsByDeathDate", NATION, REGION
// "femaleDeaths", ??
// "maleDeaths", ??

// THIS API CALL WORKS FOR NATIONS
// https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=nation;areaName=Scotland&structure={%22areaType%22:%22areaType%22,%22code%22:%22areaCode%22,%22areaName%22:%22areaName%22,%22date%22:%22date%22,%22newCases%22:%22newCasesByPublishDate%22,%22newAdmissions%22:%22newAdmissions%22,%22newDeaths%22:%22newDeathsByPublishDate%22}

// THIS API CALL WORKS FOR REGIONS
// https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=region;areaName=North%20East;date=2020-05-15&structure={%22areaType%22:%22areaType%22,%22areaName%22:%22areaName%22,%22date%22:%22date%22,%22newCases%22:%22newCasesBySpecimenDate%22,%22cumulativeCases%22:%22cumCasesBySpecimenDate%22,%22newDeaths%22:%22newDeathsByDeathDate%22,%22cumulativeDeaths%22:%22cumDeathsByDeathDate%22}
