import React from 'react';
import '../../styles/donor/ProgressBar.css';

interface ProgressBarProps {
    percentage: number;
    donated: number;
    goal: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage, donated, goal }) => {
    return (
        <div className="progress-bar-container">
            <div className="progress-bar">
                <div className="progress" style={{ width: `${percentage}%` }}></div>
            </div>
            <div className="progress-bar-stats">
                <div>{percentage}% Donated</div>
                <div>Goal: {goal}%</div>
            </div>
            <div className="donation-stats">
                <p>Donated: ${donated}</p>
                <p>Goals: ${goal}</p>
            </div>
        </div>
    );
};

export default ProgressBar;
