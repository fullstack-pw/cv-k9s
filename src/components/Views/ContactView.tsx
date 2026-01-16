import type { Profile } from '../../types/cv';

interface ContactViewProps {
  profile: Profile;
}

export function ContactView({ profile }: ContactViewProps) {
  return (
    <div className="flex-1 mx-2 border border-[color:var(--color-k9s-border)] flex items-center justify-center">
      <div className="text-center p-8 max-w-2xl">
        <div className="text-[color:var(--color-k9s-cyan)] text-2xl mb-6">
          {profile.name}
        </div>

        <div className="space-y-3 text-left inline-block">
          <div className="flex items-center gap-3">
            <span className="text-[color:var(--color-k9s-text-dim)] w-24">Email:</span>
            <a
              href={`mailto:${profile.contact.email}`}
              className="text-[color:var(--color-k9s-green)] hover:underline"
            >
              {profile.contact.email}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[color:var(--color-k9s-text-dim)] w-24">GitHub:</span>
            <a
              href={profile.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[color:var(--color-k9s-green)] hover:underline"
            >
              {profile.contact.github}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[color:var(--color-k9s-text-dim)] w-24">Phone:</span>
            <span className="text-[color:var(--color-k9s-text)]">{profile.contact.phone}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[color:var(--color-k9s-text-dim)] w-24">Location:</span>
            <span className="text-[color:var(--color-k9s-text)]">{profile.contact.location}</span>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-[color:var(--color-k9s-border)]">
          <div className="text-[color:var(--color-k9s-cyan)] mb-3">Certifications</div>
          <div className="flex flex-wrap gap-2 justify-center">
            {profile.certifications.map((cert, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-[color:var(--color-k9s-bg-light)] border border-[color:var(--color-k9s-yellow)] text-[color:var(--color-k9s-yellow)] text-sm rounded"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 text-[color:var(--color-k9s-text-dim)] text-xs">
          Press <span className="text-[color:var(--color-k9s-cyan)]">Esc</span> to go back
        </div>
      </div>
    </div>
  );
}
