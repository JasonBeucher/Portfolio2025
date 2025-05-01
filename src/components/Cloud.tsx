interface CloudProps {
  className?: string;
  flipped?: boolean;
}

export const Cloud = ({ className = "", flipped = false }: CloudProps) => {
  return (
    <div className={`absolute ${flipped ? '' : 'animate-lift-up'} ${className}`}>
      {/* Base circle - rounded corners */}
      <div className={`absolute 
        w-[100px] sm:w-[100px] md:w-[250px] lg:w-[280px] xl:w-[400px]
        h-[100px] sm:h-[100px] md:h-[250px] lg:h-[280px] xl:h-[400px]
        bg-white dark:bg-slate-600 rounded-full
        left-[50px] sm:left-[50px] md:left-[100px] lg:left-[140px] xl:left-[200px]
        ${flipped ? 'bottom-[100px] sm:bottom-[100px] md:bottom-[200px] lg:bottom-[280px] xl:bottom-[400px]' : 'top-[100px] sm:top-[100px] md:top-[200px] lg:top-[280px] xl:top-[400px]'}`} 
      />
      
      {/* Top circle */}
      <div className={`absolute 
        w-[100px] sm:w-[100px] md:w-[250px] lg:w-[280px] xl:w-[400px]
        h-[100px] sm:h-[100px] md:h-[250px] lg:h-[280px] xl:h-[400px]
        bg-white dark:bg-slate-600 rounded-full 
        left-[90px] sm:left-[90px] md:left-[180px] lg:left-[250px] xl:left-[360px]
        ${flipped ? 'bottom-[33px] sm:bottom-[33px] md:bottom-[65px] lg:bottom-[90px] xl:bottom-[133px]' : 'top-[50px] sm:top-[33px] md:top-[65px] lg:top-[90px] xl:top-[133px]'}`} 
      />
      
      {/* Side circle */}
      <div className={`absolute 
        w-[100px] sm:w-[100px] md:w-[250px] lg:w-[280px] xl:w-[400px]
        h-[100px] sm:h-[100px] md:h-[250px] lg:h-[280px] xl:h-[400px]
        bg-white dark:bg-slate-600 rounded-full
        -left-[23px] sm:-left-[23px] md:-left-[45px] lg:-left-[65px] xl:-left-[93px]
        ${flipped ? 'bottom-[133px] sm:bottom-[133px] md:bottom-[265px] lg:bottom-[370px] xl:bottom-[533px]' : 'top-[133px] sm:top-[133px] md:top-[265px] lg:top-[370px] xl:top-[533px]'}`} 
      />
    </div>
  );
};