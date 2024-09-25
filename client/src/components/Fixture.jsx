import React from 'react';
import kolkata from '/kolkata-logo.png';
import hyderabad from '/hyderabad-logo.png';
import mumbai from '/mumbai-logo.png';
import chennai from '/chennai-logo.png';
import panjab from '/panjab-logo.png';
import bangalore from '/bangalore-logo.png';

function Fixture() {
    const fixture_details = [
        {
            stadium: "MA Chidambaram Stadium, Chennai",
            date: "15 Aug, 2023",
            time: "7.30 PM IST",
            team1: {
                name: "Kolkata Knight Riders",
                logo: "kolkata",
                runs: "190",
                wickets: "10",
                overs: "19.3 OV"
            },
            team2: {
                name: "Sunrisers Hyderabad",
                logo: "hyderabad",
                runs: "237",
                wickets: "8",
                overs: "20 OV"
            },
            result: "Sunrisers Hyderabad won by 47 runs"
        },
        {
            stadium: "Wankhede Stadium, Mumbai",
            date: "20 Aug, 2023",
            time: "7.30 PM IST",
            team1: {
                name: "Chennai Super Kings",
                logo: "chennai",
                runs: "150",
                wickets: "4",
                overs: "20 OV"
            },
            team2: {
                name: "Mumbai Indians",
                logo: "mumbai",
                runs: "160",
                wickets: "5",
                overs: "20 OV"
            },
            result: "Mumbai Indians won by 10 runs"
        },
        {
            stadium: "Eden Gardens, Kolkata",
            date: "25 Aug, 2023",
            time: "7.30 PM IST",
            team1: {
                name: "Panjab Kings",
                logo: "panjab",
                runs: "188",
                wickets: "5",
                overs: "18.0 OV"
            },
            team2: {
                name: "Royal Challengers Bangalore",
                logo: "bangalore",
                runs: "187",
                wickets: "6",
                overs: "20 OV"
            },
            result: "Panjab Kings won by 5 wickets"
        }
    ];

    return (
        <div className=''>
            <div className="flex flex-wrap justify-center gap-5">
                {fixture_details.map((details, index) => (
                    <FixtureCard key={index} details={details} />
                ))}
            </div>
        </div>
    );
}

function FixtureCard({ details }) {
    return (
        <div className='bg-white p-5 shadow rounded-lg w-full sm:w-[45%] lg:w-[30%] min-w-[300px]'>
            <div className='text-sm font-medium'>{details.stadium}</div>
            <div className='text-xs text-gray-600 font-medium'>
                {details.date}, {details.time}
            </div>
            <div className="flex flex-row items-center justify-between mt-4">
                <Team team={details.team2} isTeam2={true} />
                <div className="vs-logo mx-4">
                    <img src="/vs-logo.png" width={48} height={48} alt="VS" className="object-contain" />
                </div>
                <Team team={details.team1} isTeam2={false} />
            </div>
            {/* Result Section */}
            <div className='mt-4 text-sm text-gray-700 font-bold text-center'>
                {details.result.toUpperCase()}
            </div>
        </div>
    );
}

function Team({ team, isTeam2 }) {
    const teamLogos = {
        kolkata: kolkata,
        hyderabad: hyderabad,
        mumbai: mumbai,
        chennai: chennai,
        panjab: panjab,
        bangalore: bangalore
    };

    const logoSrc = teamLogos[team.logo] || "/default-logo.png"; // Fallback to default logo

    return (
        <div className={`flex ${isTeam2 ? 'flex-row-reverse items-center' : 'flex-row items-center'} space-x-3`}>
            {/* Score for Team 2 should come first */}
            <div className={`flex flex-col ${isTeam2 ? 'items-center' : ''}`}>
                <div className="score text-xl sm:text-2xl font-medium">
                    {team.runs}/{team.wickets}
                </div>
                <div className='text-gray-600 text-xs'>
                    ({team.overs})
                </div>
            </div>
            
            {/* Team Logo and Name */}
            <div className="flex flex-col items-center">
                <div className="logo p-2 rounded-full border border-violet-500">
                    <img src={logoSrc} width={40} height={40} className="object-cover h-8 w-8 sm:h-10 sm:w-10 rounded-full" alt={`${team.name} logo`} />
                </div>
                <div className="team-name capitalize text-xs sm:text-sm font-semibold mt-2 text-center">
                    {team.name}
                </div>
            </div>
        </div>
    );
}

export default Fixture;
