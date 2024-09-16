type DateStyle = Intl.DateTimeFormatOptions['dateStyle'];

export function formatDate(date: string, dateStyle: DateStyle = 'medium', isOnlyDay = false, locales = 'en') {
	// Safari is mad about dashes in the date
	const dateToFormat = new Date(date.replaceAll('-', '/'));
	const options: Intl.DateTimeFormatOptions = isOnlyDay
		? { day: 'numeric' }
		: { year: 'numeric', month: 'numeric', day: 'numeric' };
	const dateFormatter = new Intl.DateTimeFormat(locales, options);
	return dateFormatter.format(dateToFormat);
}
