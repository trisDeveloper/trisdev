import ReactGA from 'react-ga4';

export const initGA = (measurementId: string) => {
  ReactGA.initialize(measurementId);
};

export const logEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => { ReactGA.event({action,
    category,
    label,
    value,
  });
};
