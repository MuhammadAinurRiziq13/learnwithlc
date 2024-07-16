export default function ApplicationLogo({ className }: { className?: string }) {
    return (
        <h2 className={`font-extrabold font-default tracking-wider ${className}`}>
            LearnWith
            <span className='text-primary'>LC</span>
        </h2>
    );

}
