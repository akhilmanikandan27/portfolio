"use client";



export function Footer() {
  return (
    <footer className="py-8 border-t border-border/50 bg-background">
      <div className="container mx-auto px-6 flex flex-col items-center justify-center gap-4">

        <p className="text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} Akhil M. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
