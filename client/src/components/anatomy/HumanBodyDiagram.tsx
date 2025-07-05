import * as React from 'react';
import { sephirotData } from './data/sephirotData';
import { qliphothData } from './data/qliphothData';

interface HumanBodyDiagramProps {
  onElementClick: (element: any) => void;
}

export function HumanBodyDiagram({ onElementClick }: HumanBodyDiagramProps) {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      <svg
        viewBox="0 0 400 800"
        className="w-full h-auto"
        style={{ maxHeight: '700px' }}
      >
        {/* Background circle for aura */}
        <circle
          cx="200"
          cy="400"
          r="180"
          fill="none"
          stroke="rgba(138, 43, 226, 0.1)"
          strokeWidth="1"
        />
        
        {/* Head */}
        <circle
          cx="200"
          cy="80"
          r="35"
          fill="rgba(255,255,255,0.05)"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="2"
        />
        
        {/* Brain outline */}
        <circle
          cx="200"
          cy="75"
          r="28"
          fill="none"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="1"
        />
        
        {/* Neck */}
        <rect
          x="190"
          y="115"
          width="20"
          height="25"
          fill="rgba(255,255,255,0.05)"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="2"
        />
        
        {/* Torso */}
        <ellipse
          cx="200"
          cy="300"
          rx="80"
          ry="160"
          fill="rgba(255,255,255,0.05)"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="2"
        />
        
        {/* Heart */}
        <path
          d="M185 250 Q175 240 165 250 Q155 260 165 270 Q175 280 185 270 Q195 280 205 270 Q215 260 205 250 Q195 240 185 250 Z"
          fill="rgba(220, 20, 60, 0.3)"
          stroke="rgba(220, 20, 60, 0.6)"
          strokeWidth="1"
        />
        
        {/* Lungs */}
        <ellipse
          cx="170"
          cy="230"
          rx="25"
          ry="40"
          fill="rgba(135, 206, 235, 0.2)"
          stroke="rgba(135, 206, 235, 0.4)"
          strokeWidth="1"
        />
        <ellipse
          cx="230"
          cy="230"
          rx="25"
          ry="40"
          fill="rgba(135, 206, 235, 0.2)"
          stroke="rgba(135, 206, 235, 0.4)"
          strokeWidth="1"
        />
        
        {/* Liver */}
        <ellipse
          cx="170"
          cy="320"
          rx="30"
          ry="25"
          fill="rgba(139, 69, 19, 0.3)"
          stroke="rgba(139, 69, 19, 0.5)"
          strokeWidth="1"
        />
        
        {/* Stomach */}
        <ellipse
          cx="200"
          cy="340"
          rx="20"
          ry="30"
          fill="rgba(255, 165, 0, 0.2)"
          stroke="rgba(255, 165, 0, 0.4)"
          strokeWidth="1"
        />
        
        {/* Arms */}
        <ellipse
          cx="120"
          cy="240"
          rx="15"
          ry="60"
          fill="rgba(255,255,255,0.05)"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="2"
        />
        <ellipse
          cx="280"
          cy="240"
          rx="15"
          ry="60"
          fill="rgba(255,255,255,0.05)"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="2"
        />
        
        {/* Forearms */}
        <ellipse
          cx="100"
          cy="320"
          rx="12"
          ry="50"
          fill="rgba(255,255,255,0.05)"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="2"
        />
        <ellipse
          cx="300"
          cy="320"
          rx="12"
          ry="50"
          fill="rgba(255,255,255,0.05)"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="2"
        />
        
        {/* Hands */}
        <ellipse
          cx="95"
          cy="380"
          rx="8"
          ry="15"
          fill="rgba(255,255,255,0.05)"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="2"
        />
        <ellipse
          cx="305"
          cy="380"
          rx="8"
          ry="15"
          fill="rgba(255,255,255,0.05)"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="2"
        />
        
        {/* Pelvis */}
        <ellipse
          cx="200"
          cy="480"
          rx="60"
          ry="40"
          fill="rgba(255,255,255,0.05)"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="2"
        />
        
        {/* Thighs */}
        <ellipse
          cx="175"
          cy="580"
          rx="20"
          ry="60"
          fill="rgba(255,255,255,0.05)"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="2"
        />
        <ellipse
          cx="225"
          cy="580"
          rx="20"
          ry="60"
          fill="rgba(255,255,255,0.05)"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="2"
        />
        
        {/* Calves */}
        <ellipse
          cx="175"
          cy="680"
          rx="15"
          ry="50"
          fill="rgba(255,255,255,0.05)"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="2"
        />
        <ellipse
          cx="225"
          cy="680"
          rx="15"
          ry="50"
          fill="rgba(255,255,255,0.05)"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="2"
        />
        
        {/* Feet */}
        <ellipse
          cx="175"
          cy="750"
          rx="10"
          ry="20"
          fill="rgba(255,255,255,0.05)"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="2"
        />
        <ellipse
          cx="225"
          cy="750"
          rx="10"
          ry="20"
          fill="rgba(255,255,255,0.05)"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="2"
        />
        
        {/* Spine */}
        <line
          x1="200"
          y1="115"
          x2="200"
          y2="480"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="3"
        />
        
        {/* Chakra/Energy lines */}
        <g stroke="rgba(138, 43, 226, 0.3)" strokeWidth="1" fill="none">
          <path d="M200 80 L200 115" />
          <path d="M200 140 L200 180" />
          <path d="M200 250 L200 290" />
          <path d="M200 340 L200 380" />
          <path d="M200 480 L200 520" />
          
          {/* Energy radiating lines */}
          <path d="M200 80 L170 100 M200 80 L230 100" strokeDasharray="2,2" />
          <path d="M200 250 L170 230 M200 250 L230 230" strokeDasharray="2,2" />
          <path d="M200 480 L175 500 M200 480 L225 500" strokeDasharray="2,2" />
        </g>

        {/* Sephirot points */}
        {sephirotData.map((sephira, index) => (
          <g key={`sephira-${index}`}>
            <circle
              cx={sephira.x}
              cy={sephira.y}
              r="3"
              fill="none"
              stroke="gold"
              strokeWidth="1"
              opacity="0.6"
            />
            <circle
              cx={sephira.x}
              cy={sephira.y}
              r="12"
              fill="rgba(255, 215, 0, 0.2)"
              stroke="gold"
              strokeWidth="2"
              className="cursor-pointer hover:fill-yellow-300/40 transition-all duration-300"
              onClick={() => onElementClick(sephira)}
            />
            <circle
              cx={sephira.x}
              cy={sephira.y}
              r="18"
              fill="none"
              stroke="gold"
              strokeWidth="1"
              opacity="0.3"
              className="animate-pulse"
            />
            <text
              x={sephira.x}
              y={sephira.y + 35}
              textAnchor="middle"
              fill="gold"
              fontSize="9"
              fontWeight="bold"
              className="cursor-pointer drop-shadow-lg"
              onClick={() => onElementClick(sephira)}
            >
              {sephira.name}
            </text>
          </g>
        ))}

        {/* Qliphoth points */}
        {qliphothData.map((qliphah, index) => (
          <g key={`qliphah-${index}`}>
            <circle
              cx={qliphah.x}
              cy={qliphah.y}
              r="2"
              fill="darkred"
              opacity="0.8"
            />
            <circle
              cx={qliphah.x}
              cy={qliphah.y}
              r="8"
              fill="rgba(139, 0, 0, 0.3)"
              stroke="red"
              strokeWidth="2"
              className="cursor-pointer hover:fill-red-600/50 transition-all duration-300"
              onClick={() => onElementClick(qliphah)}
            />
            <circle
              cx={qliphah.x}
              cy={qliphah.y}
              r="12"
              fill="none"
              stroke="red"
              strokeWidth="1"
              opacity="0.4"
              strokeDasharray="2,2"
            />
            <text
              x={qliphah.x}
              y={qliphah.y - 20}
              textAnchor="middle"
              fill="red"
              fontSize="7"
              fontWeight="bold"
              className="cursor-pointer drop-shadow-lg"
              onClick={() => onElementClick(qliphah)}
            >
              {qliphah.name}
            </text>
          </g>
        ))}

        {/* Tree of Life connections */}
        <g stroke="rgba(255, 215, 0, 0.2)" strokeWidth="1" fill="none">
          <path d="M200 50 L170 100 M200 50 L230 100" />
          <path d="M170 100 L150 200 M230 100 L250 200" />
          <path d="M170 100 L200 250 M230 100 L200 250" />
          <path d="M150 200 L200 250 M250 200 L200 250" />
          <path d="M150 200 L150 350 M250 200 L250 350" />
          <path d="M200 250 L150 350 M200 250 L250 350" />
          <path d="M150 350 L200 450 M250 350 L200 450" />
          <path d="M200 450 L200 550" />
        </g>

        {/* Qliphothic connections (shadow tree) */}
        <g stroke="rgba(139, 0, 0, 0.2)" strokeWidth="1" fill="none" strokeDasharray="3,3">
          <path d="M180 30 L160 80 M180 30 L240 80" />
          <path d="M160 80 L130 180 M240 80 L270 180" />
          <path d="M130 180 L220 230 M270 180 L220 230" />
          <path d="M130 330 L180 430 M270 330 L180 430" />
          <path d="M180 430 L220 530" />
        </g>
      </svg>
    </div>
  );
}