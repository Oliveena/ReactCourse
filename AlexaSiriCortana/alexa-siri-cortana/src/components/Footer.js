import React from "react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white text-center py-3 mt-auto">
      <p>© Anastassia Tarassova {new Date().toLocaleDateString()}</p>
    </footer>
  );
}
