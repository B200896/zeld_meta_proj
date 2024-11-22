const hireData = [
    {
      name:"John Anderson",
      email:"john.anderson@gmail.com",
      phone:"+1 (555) 123-4567",
      matchscore:"95%",
      linkedin:"Profile",
      hiringCompanyMail:"recruiting@google.com",
      company:"google"
    },
    {
        name:"Christopher Lee",
        email:"chris.lee@gmail.com",
        phone:"+1 (555) 123-4567",
        matchscore:"95%",
        linkedin:"Profile",
        hiringCompanyMail:"recruiting@google.com",
        company:"google"
    },
    {
        name:"Lisa Johnson",
        email:"lisa.johnson@gmail.com",
        phone:"+1 (555) 123-4567",
        matchscore:"91%",
        linkedin:"Profile",
        hiringCompanyMail:"recruiting@google.com",
        company:"google"
    },
    {
        name:"Sarah Williams",
        email:"sarah.w@gmail.com",
        phone:"+1 (555) 123-4567",
        matchscore:"88%",
        linkedin:"Profile",
        hiringCompanyMail:"recruiting@google.com",
        company:"google"
    },
    {
        name:"Lisa Johnson",
        email:"lisa.johnson@gmail.com",
        phone:"+1 (555) 123-4567",
        matchscore:"91%",
        linkedin:"Profile",
        hiringCompanyMail:"recruiting@x.com.com",
        company:"x.com"
        
    },
    {
        name:"Lisa Johnson",
        email:"jessica.t@gmail.com",
        phone:"+1 (555) 123-4567",
        matchscore:"87%",
        linkedin:"Profile",
        hiringCompanyMail:"recruiting@x.com.com",
        company:"x.com"
        
    },
    {
        name:"Jessica Taylor",
        email:"jessica.t@gmail.com",
        phone:"+1 (555) 123-4567",
        matchscore:"87%",
        linkedin:"Profile",
        hiringCompanyMail:"recruiting@x.com.com",
        company:"x.com"
        
    },
    {
        name:"Jessica Taylor",
        email:"jessica.t@gmail.com",
        phone:"+1 (555) 123-4567",
        matchscore:"87%",
        linkedin:"Profile",
        hiringCompanyMail:"recruiting@x.com.com",
        company:"x.com"
        
    },
    {
        name:"Jessica Taylor",
        email:"jessica.t@gmail.com",
        phone:"+1 (555) 123-4567",
        matchscore:"87%",
        linkedin:"Profile",
        hiringCompanyMail:"recruiting@x.com.com",
        company:"x.com"
        
    },
    {
        name:"Jessica Taylor",
        email:"jessica.t@gmail.com",
        phone:"+1 (555) 123-4567",
        matchscore:"87%",
        linkedin:"Profile",
        hiringCompanyMail:"recruiting@google.com",
        company:"x.com"
        
    },
    {
        name:"Lisa Johnson",
        email:"jessica.t@gmail.com",
        phone:"+1 (555) 123-4567",
        matchscore:"87%",
        linkedin:"Profile",
        hiringCompanyMail:"recruiting@github.com",
        company:"github"
        
    },
    {
        name:"Jessica Taylor",
        email:"jessica.t@gmail.com",
        phone:"+1 (555) 123-4567",
        matchscore:"87%",
        linkedin:"Profile",
        hiringCompanyMail:"recruiting@github.com",
        company:"github"
        
    },
    {
        name:"Jessica Taylor",
        email:"jessica.t@gmail.com",
        phone:"+1 (555) 123-4567",
        matchscore:"87%",
        linkedin:"Profile",
        hiringCompanyMail:"recruiting@github.com",
        company:"github"
        
    },
    {
        name:"Jessica Taylor",
        email:"jessica.t@gmail.com",
        phone:"+1 (555) 123-4567",
        matchscore:"87%",
        linkedin:"Profile",
        hiringCompanyMail:"recruiting@github.com",
        company:"github"
        
    },
    {
        name:"Kevin Patel",
        email:"kevin.p@yahoo.com",
        phone:"+1 (555) 123-4567",
        matchscore:"87%",
        linkedin:"Profile",
        hiringCompanyMail:"recruiting@vimeo.com",
        company:"vimeo"
        
    },
    {
        name:"Michelle Park",
        email:"michelle.p@yahoo.com",
        phone:"+1 (555) 123-4567",
        matchscore:"87%",
        linkedin:"Profile",
        hiringCompanyMail:"recruiting@vimeo.com",
        company:"vimeo"

    },
    {
        name:"Emily Rodriguez",
        email:"emily.r@gmail.com",
        phone:"+1 (555) 123-4567",
        matchscore:"87%",
        linkedin:"Profile",
        hiringCompanyMail:"recruiting@vimeo.com",
        company:"vimeo"

    },
    {
        name:"David Kim",
        email:"david.kim@hotmail.com",
        phone:"+1 (555) 123-4567",
        matchscore:"87%",
        linkedin:"Profile",
        hiringCompanyMail:"recruiting@facebook.com",
        company:"facebook"

    },
    {
        name:"Amanda White",
        email:"amanda.white@gmail.com",
        phone:"+1 (555) 123-4567",
        matchscore:"87%",
        linkedin:"Profile",
        hiringCompanyMail:"recruiting@facebook.com",
        company:"facebook"

    },
    {
        name:"Brian Wilson",
        email:"brian.w@gmail.com",
        phone:"+1 (555) 123-4567",
        matchscore:"87%",
        linkedin:"Profile",
        hiringCompanyMail:"recruiting@facebook.com",
        company:"facebook"

    },    
    
  ];
export async function GET(req){
    return new Response(JSON.stringify(hireData),{status:200})
}
