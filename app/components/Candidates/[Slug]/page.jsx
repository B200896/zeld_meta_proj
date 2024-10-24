"use client"
import { useRouter } from 'next/navigation';

const Candidates = ({params}) => {
   
    const { Slug } = params; 
    console.log("res",Slug)

    const candidatesList = [
        { name: "Dipesh", contact: "8938338383383", linkedinprofile: "abc@linkedin", gmail: "dipesh@gmail.com", jobprofile: "google" },
        { name: "Shyam", contact: "839938499494", linkedinprofile: "abc@linkedin", gmail: "shyam@gmail.com", jobprofile: "google" },
        { name: "Mohan", contact: "78677727273", linkedinprofile: "abc@linkedin", gmail: "mohan@gmail.com", jobprofile: "google" },
        { name: "Jai", contact: "909383838388", linkedinprofile: "abc@linkedin", gmail: "jai@gmail.com", jobprofile: "Samsung" },
        { name: "Fareen", contact: "83737444494", linkedinprofile: "fareen@linkedin", gmail: "fareen@gmail.com", jobprofile: "Amdocs" },
        { name: "Ishita", contact: "868585855894", linkedinprofile: "abc@linkedin", gmail: "ishita@gmail.com", jobprofile: "Amdocs" },
        { name: "Ishita", contact: "868585855894", linkedinprofile: "abc@linkedin", gmail: "ishita@gmail.com", jobprofile: "Flipkart" },
        { name: "Ishita", contact: "868585855894", linkedinprofile: "abc@linkedin", gmail: "ishita@gmail.com", jobprofile: "Xiomi" },
        { name: "Ishita", contact: "868585855894", linkedinprofile: "abc@linkedin", gmail: "ishita@gmail.com", jobprofile: "Accenture" },
    ];

    
    const candidates = Slug
        ? candidatesList.filter(candidate => candidate.jobprofile.toLowerCase() === Slug.toLowerCase()) 
        : [];

    return (
        <div>
        <h1>Candidates List for: {Slug}</h1>
        {candidates.length > 0 ? (
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>Name</th>
                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>Contact</th>
                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>LinkedIn Profile</th>
                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>Gmail</th>
                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>Job Profile</th>
                    </tr>
                </thead>
                <tbody>
                    {candidates.map((candidate, index) => (
                        <tr key={index}>
                            <td style={{ border: "1px solid #ddd", padding: "8px" }}>{candidate.name}</td>
                            <td style={{ border: "1px solid #ddd", padding: "8px" }}>{candidate.contact}</td>
                            <td style={{ border: "1px solid #ddd", padding: "8px" }}>{candidate.linkedinprofile}</td>
                            <td style={{ border: "1px solid #ddd", padding: "8px" }}>{candidate.gmail}</td>
                            <td style={{ border: "1px solid #ddd", padding: "8px" }}>{candidate.jobprofile}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        ) : (
            <p>No candidates available for this job profile.</p>
        )}
    </div>
    );
};

export default Candidates;
