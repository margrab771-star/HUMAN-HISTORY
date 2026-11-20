import React from 'react';
import { ConfidenceLevel, CONFIDENCE_BADGES } from '../../types';
import { ShieldCheck, HelpCircle, AlertTriangle, Sparkles } from 'lucide-react';

interface ConfidenceBadgeProps {
  level: ConfidenceLevel;
  size?: 'sm' | 'md' | 'lg';
  showDescription?: boolean;
  className?: string;
}

export const ConfidenceBadge: React.FC<ConfidenceBadgeProps> = ({
  level,
  size = 'md',
  showDescription = false,
  className = ''
}) => {
  const badgeInfo = CONFIDENCE_BADGES[level];

  const getIcon = () => {
    switch (level) {
      case 'level1':
        return <ShieldCheck className={size === 'sm' ? 'w-3 h-3' : 'w-3.5 h-3.5'} />;
      case 'level2':
        return <HelpCircle className={size === 'sm' ? 'w-3 h-3' : 'w-3.5 h-3.5'} />;
      case 'level3':
        return <AlertTriangle className={size === 'sm' ? 'w-3 h-3' : 'w-3.5 h-3.5'} />;
      case 'level4':
        return <Sparkles className={size === 'sm' ? 'w-3 h-3' : 'w-3.5 h-3.5'} />;
    }
  };

  const sizeClasses = {
    sm: 'text-[10px] px-2 py-0.5 gap-1',
    md: 'text-xs px-2.5 py-1 gap-1.5',
    lg: 'text-sm px-3.5 py-1.5 gap-2 font-medium',
  };

  return (
    <div className={`inline-flex flex-col ${className}`}>
      <span
        title={badgeInfo.description}
        className={`inline-flex items-center rounded-full border font-mono tracking-tight transition-all duration-200 select-none ${badgeInfo.badgeClass} ${sizeClasses[size]}`}
      >
        {getIcon()}
        <span className="font-semibold uppercase tracking-wider">{badgeInfo.code}:</span>
        <span className="truncate">{badgeInfo.name}</span>
      </span>
      {showDescription && (
        <p className="mt-1 text-[11px] text-slate-400 font-sans leading-relaxed">
          {badgeInfo.description}
        </p>
      )}
    </div>
  );
};
