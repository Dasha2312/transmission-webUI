import { useTorrents } from "@/entities/torrent";

function TorrentList() {
  const { torrents, isLoading } = useTorrents();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <ul>
        {torrents.map(t => (
          <li key={t.id}>{t.name} — {Math.round(t.percentDone * 100)}%</li>
        ))}
      </ul>
    </div>
  );
}

export default TorrentList;