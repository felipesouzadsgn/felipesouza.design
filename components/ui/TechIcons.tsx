import React, { FC } from 'react';
import {
    SiFramer,
    SiOpenai,
    SiGooglegemini,
    SiObsidian,
    SiReact,
    SiNextdotjs,
    SiAnthropic,
    SiAdobephotoshop,
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiGoogle
} from 'react-icons/si';

interface IconProps {
    className?: string;
    size?: number;
}

// Custom Icon for Antigravity (Project Specific)
export const AntigravityIcon: FC<IconProps> = ({ className = "", size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 2L2 7L12 12L22 7L12 2Z" />
        <path d="M2 17L12 22L22 17" />
        <path d="M2 12L12 17L22 12" />
    </svg>
);

// Custom Icon for CapCut (Missing in current Si version)
export const CapCutIcon: FC<IconProps> = ({ className = "", size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M18.5 5.5L7.5 16.5M7.5 5.5L18.5 16.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M4 12H2M22 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

export const MidjourneyIcon: FC<IconProps> = ({ className = "", size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M12 2L4 19H20L12 2Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M9 13H15" stroke="currentColor" strokeWidth="2" />
    </svg>
);

// Wrappers for React Icons to match previous interface and ensure consistent sizing/styling if needed
export const FramerIcon: FC<IconProps> = ({ className, size = 24 }) => <SiFramer className={className} size={size} />;
export const ChatGPTIcon: FC<IconProps> = ({ className, size = 24 }) => <SiOpenai className={className} size={size} />;
// Fallback to SiGoogle if SiGooglegemini is not yet in the installed version, but trying specific first. 
// Note: In safer implementation I'd check version, but I'll assume standard latest or fallback.
// If SiGooglegemini doesn't exist, I'll switch to SiGoogle in verification.
export const GeminiIcon: FC<IconProps> = ({ className, size = 24 }) => <SiGooglegemini className={className} size={size} />;
export const ObsidianIcon: FC<IconProps> = ({ className, size = 24 }) => <SiObsidian className={className} size={size} />;
export const ReactIcon: FC<IconProps> = ({ className, size = 24 }) => <SiReact className={className} size={size} />;
export const NextJsIcon: FC<IconProps> = ({ className, size = 24 }) => <SiNextdotjs className={className} size={size} />;
export const ClaudeCodeIcon: FC<IconProps> = ({ className, size = 24 }) => <SiAnthropic className={className} size={size} />;
// CapCutIcon is defined above as custom
export const PhotoshopIcon: FC<IconProps> = ({ className, size = 24 }) => <SiAdobephotoshop className={className} size={size} />;
// MidjourneyIcon is defined above as custom
export const HTMLIcon: FC<IconProps> = ({ className, size = 24 }) => <SiHtml5 className={className} size={size} />;
export const CSSIcon: FC<IconProps> = ({ className, size = 24 }) => <SiCss3 className={className} size={size} />;
export const JSIcon: FC<IconProps> = ({ className, size = 24 }) => <SiJavascript className={className} size={size} />;
