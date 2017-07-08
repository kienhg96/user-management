const getWindowWidth = () => window.innerWidth 
		|| document.documentElement.clientWidth 
		|| document.getElementsByTagName('body')[0].clientWidth;

export default getWindowWidth;
