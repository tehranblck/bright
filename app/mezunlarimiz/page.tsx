import Testimonials from "@/components/Testimonials"




const Mezunlar:React.FC=()=>{

    return(
        <div className='pt-28 lg:pt-[150px]'>
            <div className='container mx-auto'>
                <Testimonials button={false} text={`Ən yaxşı təhsil, tələbənin marağını oyadaraq onun öyrənmək arzusunu artıran təhsildir.`} />
            </div>
        </div>
    )

}


export default Mezunlar
