export default function About ()
{
    return (
        <div className="flex">
        <div className="flex flex-col gap-4 m-5">
                <div className="text-5xl font-bold">About Us</div>
                <div className="w-11/12 border border-black"></div>

            <p>Campus Caravan is an entirely student-led press club dedicated
                to the university. Comprised of a core committee, reporters, writers,
                designers, and videographers, the club produces and publishes
                various material across different platforms. For example, recent
                newsworthy happenings on campus, member-written op-eds,
                student submissions, crosswords, poetry, and more, are covered in
                the bimonthly ArCCives (the club newspaper, distributed
                physically university-wide). Advice columns and anecdotes for
                freshmen, curated by seniors, are specially published in the
                Fresher's Edition, a heavily successful venture by the club.
            </p>
            <p>We also conduct interviews with the university's administration, the
                    student council, faculty, and staff, ensuring our role in upholding
                    the values of transparency and unbiased journalism on campus.
                    The club maintains a social media presence where quick
                    reportings on campus events, footage collection of interviews,
                    student's inquiries and suggestions, etc. can be found. In essence,
                    Campus Caravan is a trusted presence on campus where
                    students not only hone their investigative and expressive skills, but
                    find a community built on information, passion, and creativity.
            </p>
            <div className="flex justify-center gap-8 flex-wrap">
                <div className="w-80 h-60 border-4"></div>
                <div className="w-80 h-60 border-4"></div>
                <div className="w-80 h-60 border-4"></div>
            </div>
        </div>
    </div>
    );
}

