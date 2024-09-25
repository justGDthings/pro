import React from 'react';
import kolkata from '/kolkata-logo.png';
import hyderabad from '/hyderabad-logo.png';
import mumbai from '/mumbai-logo.png';
import chennai from '/chennai-logo.png';
import panjab from '/panjab-logo.png';
import bangalore from '/bangalore-logo.png';

const teamsData = [
    { name: "Chennai Super Kings", logo: chennai, matches: 0, wins: 0, losses: 0, points: 0, nrr: 0, recentForm: "LWWL" },
    { name: "Mumbai Indians", logo: mumbai, matches: 0, wins: 0, losses: 0, points: 0, nrr: 0, recentForm: "WLLL" },
    { name: "Royal Challengers Bangalore", logo: bangalore, matches: 0, wins: 0, losses: 0, points: 0, nrr: 0, recentForm: "WLWL" },
    { name: "Kolkata Knight Riders", logo: kolkata, matches: 0, wins: 0, losses: 0, points: 0, nrr: 0, recentForm: "LLWW" },
    { name: "Sunrisers Hyderabad", logo: hyderabad, matches: 0, wins: 0, losses: 0, points: 0, nrr: 0, recentForm: "LWLW" },
    { name: "Rajasthan Royals", logo: "", matches: 0, wins: 0, losses: 0, points: 0, nrr: 0, recentForm: "WLLL" },
    { name: "Delhi Capitals", logo: "", matches: 0, wins: 0, losses: 0, points: 0, nrr: 0, recentForm: "WLWL" },
    { name: "Punjab Kings", logo: panjab, matches: 0, wins: 0, losses: 0, points: 0, nrr: 0, recentForm: "LLWL" },
    { name: "Gujarat Titans", logo: "", matches: 0, wins: 0, losses: 0, points: 0, nrr: 0, recentForm: "WWLW" },
    { name: "Lucknow Super Giants", logo: "", matches: 0, wins: 0, losses: 0, points: 0, nrr: 0, recentForm: "LWWW" }
];

function PointTable() {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8" id='point-table'>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 mt-4">IPL 2024 Point Table</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
                    <thead>
                        <tr className="bg-gray-800 text-white">
                            <th className="py-4 px-2 md:px-4">#</th>
                            <th className="py-4 px-2 md:px-4 text-left">Team</th>
                            <th className="py-4 px-2 md:px-4">Matches</th>
                            <th className="py-4 px-2 md:px-4">Wins</th>
                            <th className="py-4 px-2 md:px-4">Losses</th>
                            <th className="py-4 px-2 md:px-4">Points</th>
                            <th className="py-4 px-2 md:px-4">NRR</th>
                            <th className="py-4 px-2 md:px-4">Recent Form</th>
                        </tr>
                    </thead>
                    <tbody>
                        {teamsData.map((team, index) => {
                            return (
                                <tr 
                                    key={index} 
                                    className={`hover:bg-gray-100 ${index % 2 === 0 ? 'bg-gray-50' : ''}`}
                                >
                                    <td className="text-center py-4 px-2 md:px-4">{index + 1}</td>
                                    <td className="text-left py-4 px-2 md:px-4 flex items-center">
                                        {team.logo && (
                                            <img src={team.logo} alt={`${team.name} logo`} className="h-6 w-6 mr-2" />
                                        )}
                                        {team.name}
                                    </td>
                                    <td className="text-center py-4 px-2 md:px-4">{team.matches}</td>
                                    <td className="text-center py-4 px-2 md:px-4">{team.wins}</td>
                                    <td className="text-center py-4 px-2 md:px-4">{team.losses}</td>
                                    <td className="text-center py-4 px-2 md:px-4">{team.points}</td>
                                    <td className="text-center py-4 px-2 md:px-4">{team.nrr.toFixed(2)}</td>
                                    <td className="text-center py-4 px-2 md:px-4">{team.recentForm}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default PointTable;
