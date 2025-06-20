export const careerStartDate = new Date('2018-01-01');
export function getExperienceYears() {
    const now = new Date();
    const diff = now - careerStartDate;
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
}