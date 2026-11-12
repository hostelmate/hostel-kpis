/**
 * Hostel KPIs: the formulas behind HostelMate's free hostel calculators (https://hostelmate.co/tools).
 * Every function returns 0 where the input would divide by zero. MIT licence.
 */

const ratio = (a, b) => (b > 0 ? a / b : 0);

/** Occupancy % = (occupied beds / available beds) x 100. */
export const occupancyRate = (occupiedBeds, availableBeds) => ratio(occupiedBeds, availableBeds) * 100;

/** Bed ADR = total bed revenue / beds sold (bed-nights). */
export const bedAdr = (bedRevenue, bedsSold) => ratio(bedRevenue, bedsSold);

/** RevPAB = total bed revenue / available beds (bed-nights), sold or not. */
export const revpab = (bedRevenue, availableBeds) => ratio(bedRevenue, availableBeds);

/** TRevPAB = total hostel revenue (beds + extras) / available beds. */
export const trevpab = (totalRevenue, availableBeds) => ratio(totalRevenue, availableBeds);

/** ALOS = occupied bed-nights / number of bookings. */
export const alos = (occupiedBedNights, bookings) => ratio(occupiedBedNights, bookings);

/** CPOB = total operating costs / occupied beds (bed-nights). */
export const cpob = (operatingCosts, occupiedBeds) => ratio(operatingCosts, occupiedBeds);

/** Break-even beds = fixed costs / (bed ADR - variable cost per bed). 0 when each bed loses money. */
export const breakEvenBeds = (fixedCosts, adr, variableCostPerBed) => ratio(fixedCosts, adr - variableCostPerBed);

/** OTA commission and what is left: net = gross - gross x commission %. */
export const otaNetRevenue = (grossRevenue, commissionPercent) => {
  const commission = grossRevenue * (commissionPercent / 100);
  return { commission, net: grossRevenue - commission };
};

/** Linen sets needed = total beds x sets per bed x target PAR level. */
export const linenRequired = (totalBeds, setsPerBed, parLevel) => totalBeds * setsPerBed * parLevel;
