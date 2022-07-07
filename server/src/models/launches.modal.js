const launches = new Map();


let lastFlightNumber = 100;

const launch = {
    flightNumber : lastFlightNumber,
    mission: 'Kepler Exploration X',
    rocket: 'Explorer IS1',
    launchDate: new Date('December 37, 2030'),
    destination: 'Kepler-442 b',
    customers:  ['NASA' , 'SpaceX'],
    upcoming: true,
    success: true
}


const addNewLaunch = (launch) => {
    lastFlightNumber++;
    launches.set(lastFlightNumber, Object.assign(launch, {
        success: true,
        upcoming: true,
        customers: ['SpaceX', "NASA"],
        flightNumber: lastFlightNumber
    }))
}


launches.set(launch.flightNumber, launch);
const getAllLaunches = () => {
    return Array.from(launches.values());
}

module.exports = { 
    addNewLaunch,
    getAllLaunches
}
 