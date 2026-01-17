import React from 'react';
import { Home, Car, Briefcase, Wrench, GraduationCap, Dog, ShoppingBag, Heart, Search, MapPin, User, Menu, X, Camera, ChevronRight, ChevronLeft, ChevronDown, Phone, Mail, Share2, AlertTriangle, ShieldCheck, Clock, MessageCircle, MoreVertical, Filter, Star, CheckCircle, Bell, ClipboardList, Armchair, Smartphone, Music, Dumbbell, Shirt, Baby, Gamepad2, Tractor, Users, Gem, Monitor, Check } from 'lucide-react';

export const IconMap: Record<string, React.ElementType> = {
  Home, Car, Briefcase, Wrench, GraduationCap, Dog, ShoppingBag, Heart, Search, MapPin, User, Menu, X, Camera, ChevronRight, ChevronLeft, ChevronDown, Phone, Mail, Share2, AlertTriangle, ShieldCheck, Clock, MessageCircle, MoreVertical, Filter, Star, CheckCircle, Bell, ClipboardList, Armchair, Smartphone, Music, Dumbbell, Shirt, Baby, Gamepad2, Tractor, Users, Gem, Monitor, Check
};

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
  className?: string;
  size?: number | string;
}

export const Icon: React.FC<IconProps> = ({ name, className, size = 20, ...props }) => {
  const LucideIcon = IconMap[name];
  if (!LucideIcon) return null;
  // @ts-ignore - Lucide icon props compatibility
  return <LucideIcon className={className} size={size} {...props} />;
};