import { IMAGE_BASE } from "../../env";

export const getGreeting = () => {
  const currentHour = new Date().getHours();
  if (currentHour < 12) {
    return "Good Morning";
  } else if (currentHour < 18) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
};


export const capitalize = (name: string) => {
  if (!name) return "";
  return name.charAt(0).toUpperCase() + name.slice(1);
};


export function getObject(
  array: { name: string; id: string }[],
  id: string
): { name: string; id: string } | null {
  return array.find(item => item.id === id) || null;
}


// id to return name value
export function getImagePath(imageUrl: string): string | null {
  if (!imageUrl) return null;

  // Split the URL by '/' and take the last two segments
  const segments = imageUrl.split('/');
  const relativePath = segments.slice(-2).join('/'); // e.g., 'members/67178846ee800.jpg'

  return `${IMAGE_BASE}${relativePath}`;
}