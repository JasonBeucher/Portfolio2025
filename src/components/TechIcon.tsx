export const TechIcon = ({ component }: { component: React.ElementType; }) => {
    const Component = component;
    return (
        <>
            <Component className="size-10 fill-white dark:fill-[url(#techIconGradient)]" />
            <svg className="size-0 absolute"> 
                <linearGradient id="techIconGradient">
                    <stop offset="0%" stopColor="#f0a800"/>
                    <stop offset="100%" stopColor="#ffc760"/>
                </linearGradient>            
            </svg>
        </>
    );
}