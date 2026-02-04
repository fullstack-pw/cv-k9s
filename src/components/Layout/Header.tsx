import type { Profile } from '../../types/cv';

interface HeaderProps {
  profile: Profile;
  currentNamespace: string;
}

// const K9S_LOGO = `  ____  __ ________
//  |    |/  /   __   \\______
//  |       /\\____    /  ___/
//  |    \\   \\  /    /\\___  \\
//  |____|\\__ \\/____//____  /
//          \\/           \\/`;

const K9S_LOGO = `▗▄▄▖ ▗▄▄▖  ▗▄▖  ▗▄▄▖
▐▌ ▐▌▐▌ ▐▌▐▌ ▐▌▐▌   
▐▛▀▘ ▐▛▀▘ ▐▛▀▜▌ ▝▀▚▖
▐▌   ▐▌   ▐▌ ▐▌▗▄▄▞▘
                    `;

export function Header({ profile, currentNamespace }: HeaderProps) {
  return (
    <div className="flex justify-between p-2 text-sm">
      <div className="flex flex-col gap-0.5">
        <div>
          <span className="text-[color:var(--color-k9s-gold)]">Context: </span>
          <span className="text-[color:var(--color-k9s-text)] font-bold">{profile.context}</span>
          <span className="text-[color:var(--color-k9s-text-dim)]"> [RW]</span>
        </div>
        <div>
          <span className="text-[color:var(--color-k9s-gold)]">Cluster: </span>
          <span className="text-[color:var(--color-k9s-text)] font-bold">{profile.cluster}</span>
        </div>
        <div>
          <span className="text-[color:var(--color-k9s-gold)]">User:    </span>
          <span className="text-[color:var(--color-k9s-text)] font-bold">{profile.user}</span>
        </div>
        <div>
          <span className="text-[color:var(--color-k9s-gold)]">K9s Rev: </span>
          <span className="text-[color:var(--color-k9s-text)] font-bold">{profile.k9sRev}</span>
        </div>
        <div>
          <span className="text-[color:var(--color-k9s-gold)]">K8s Rev: </span>
          <span className="text-[color:var(--color-k9s-text)] font-bold">{profile.k8sRev}</span>
        </div>
        <div>
          <span className="text-[color:var(--color-k9s-gold)]">CPU:     </span>
          <span className="text-[color:var(--color-k9s-text)] font-bold">38% (100Hz N-cores superconscious quantumn brain)</span>
        </div>
        <div>
          <span className="text-[color:var(--color-k9s-gold)]">MEM:     </span>
          <span className="text-[color:var(--color-k9s-text)] font-bold">38% (2.5PB ECC)</span>
        </div>
      </div>

      <div className="flex gap-8">
        <div className="flex flex-col gap-0.5 text-[color:var(--color-k9s-text-dim)]">
          <div><span className="text-[color:var(--color-k9s-cyan)]">&lt;0&gt;</span> all</div>
          <div><span className="text-[color:var(--color-k9s-cyan)]">&lt;1&gt;</span> {currentNamespace || 'default'}</div>
        </div>

        <div className="flex flex-col gap-0.5 text-[color:var(--color-k9s-text-dim)]">
          <div><span className="text-[color:var(--color-k9s-cyan)]">&lt;d&gt;</span> Describe</div>
          <div><span className="text-[color:var(--color-k9s-cyan)]">&lt;l&gt;</span> Logs</div>
          <div><span className="text-[color:var(--color-k9s-cyan)]">&lt;?&gt;</span> Help</div>
        </div>

        <div className="flex flex-col gap-0.5 text-[color:var(--color-k9s-text-dim)]">
          <div><span className="text-[color:var(--color-k9s-cyan)]">&lt;:&gt;</span> Command</div>
          <div><span className="text-[color:var(--color-k9s-cyan)]">&lt;esc&gt;</span> Back</div>
          <div><span className="text-[color:var(--color-k9s-cyan)]">&lt;q&gt;</span> Contact</div>
        </div>

        <pre className="text-[color:var(--color-k9s-cyan)] text-xs leading-tight whitespace-pre">
          {K9S_LOGO}
        </pre>
      </div>
    </div>
  );
}
