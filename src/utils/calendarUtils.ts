import { JobPosting } from '../types/job';

export function calculateDDay(targetDateStr: string): {
  daysRemaining: number;
  label: string;
  isUrgent: boolean; // D-3 or less
  isUpcoming: boolean; // D-7 or less
  isExpired: boolean;
} {
  // Use today as 2026-11-02 based on system context
  const today = new Date('2026-11-02T00:00:00');
  const target = new Date(targetDateStr + 'T23:59:59');

  const diffTime = target.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays < 0) {
    return {
      daysRemaining: diffDays,
      label: '마감',
      isUrgent: false,
      isUpcoming: false,
      isExpired: true,
    };
  } else if (diffDays === 0) {
    return {
      daysRemaining: 0,
      label: 'D-Day',
      isUrgent: true,
      isUpcoming: true,
      isExpired: false,
    };
  } else {
    return {
      daysRemaining: diffDays,
      label: `D-${diffDays}`,
      isUrgent: diffDays <= 3,
      isUpcoming: diffDays <= 7,
      isExpired: false,
    };
  }
}

export function formatKoreanDate(dateStr: string): string {
  if (!dateStr) return '';
  const parts = dateStr.split('-');
  if (parts.length === 3) {
    return `${parts[0]}년 ${parseInt(parts[1], 10)}월 ${parseInt(parts[2], 10)}일`;
  }
  return dateStr;
}

export function generateGoogleCalendarUrl(job: JobPosting): string {
  const title = encodeURIComponent(`[채용마감] ${job.company} - ${job.title}`);
  const details = encodeURIComponent(
    `회사: ${job.company} (${job.companyTier})\n직무: ${job.engineeringDomain} (${job.department})\n지역: ${job.location.city} ${job.location.plantName}\n지원링크: ${job.applyUrl}`
  );
  const location = encodeURIComponent(`${job.location.city} ${job.location.plantName}`);
  
  // Format YYYYMMDD
  const rawDate = job.timeline.endDate.replace(/-/g, '');
  const dates = `${rawDate}T090000/${rawDate}T180000`;

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${dates}`;
}

export function downloadIcsFile(jobs: JobPosting[], filename = 'autocareer_recruitment_deadlines.ics') {
  let icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//AutoCareer//Automotive Job Calendar//KO',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
  ];

  jobs.forEach((job) => {
    const rawDate = job.timeline.endDate.replace(/-/g, '');
    icsContent.push(
      'BEGIN:VEVENT',
      `UID:job-${job.id}@autocareer.kr`,
      `DTSTAMP:${rawDate}T090000Z`,
      `DTSTART:${rawDate}T090000Z`,
      `DTEND:${rawDate}T180000Z`,
      `SUMMARY:[채용서류마감] ${job.company} ${job.engineeringDomain}`,
      `DESCRIPTION:${job.title}\\n근무지: ${job.location.city}\\n지원주소: ${job.applyUrl}`,
      `LOCATION:${job.location.city} ${job.location.plantName}`,
      'STATUS:CONFIRMED',
      'END:VEVENT'
    );
  });

  icsContent.push('END:VCALENDAR');

  const blob = new Blob([icsContent.join('\r\n')], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
