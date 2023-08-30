import ReactGA from 'react-ga4';


export const customEvent = (pageName, action, label, value) =>{
    ReactGA.event({
        category: pageName,
        action: action,
        label: label,
        value: value
    })
}