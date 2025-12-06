const HeroImage = () => {
  return (
    <section className="pb-20 bg-background">
      <div className="container">
        <div className="rounded-xl overflow-hidden shadow-2xl border border-border/50">
          {/* Browser-style header bar */}
          <div className="bg-muted px-4 py-2 flex items-center gap-3 border-b border-border/50">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="text-xs text-muted-foreground bg-background px-4 py-1 rounded-md">
                Meeting Analysis and Product Brief
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs px-2 py-0.5 bg-green-500 text-white rounded">Share</span>
              <span className="text-xs text-muted-foreground">100%</span>
            </div>
          </div>
          {/* Main product screenshot mockup */}
          <div className="bg-background p-6">
            <div className="grid grid-cols-12 gap-4 min-h-[400px]">
              {/* Left sidebar */}
              <div className="col-span-2 space-y-3">
                <div className="flex items-center gap-2 text-sm font-medium p-2 bg-muted rounded">
                  <span className="w-4 h-4 bg-muted-foreground/20 rounded"></span>
                  Transcription
                </div>
                <div className="text-xs text-muted-foreground p-2">
                  <p className="mb-2"><strong>Speaker 2</strong> (41:30 - 41:35): Yeah, we can do that. What about content for the education hub?</p>
                  <p><strong>Speaker 1</strong> (41:35 - 41:55): Sneha, can you draft an outline in a week? And Mark, we need to research APIs for the garden planner...</p>
                </div>
              </div>
              {/* Center content */}
              <div className="col-span-5 space-y-4">
                <div className="border border-border rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-4 h-4 bg-purple-500 rounded"></span>
                    <span className="font-medium">Decisions & Actions</span>
                    <span className="text-green-500 text-sm">✓</span>
                  </div>
                  <div className="text-sm text-muted-foreground space-y-2">
                    <p>Review the customer transcript and extract the following information:</p>
                    <p>• List of questions asked</p>
                    <p>• other tools, requiring manual data export and import.</p>
                    <p className="font-medium">Top priority issue:</p>
                    <p>• Improving search functionality to enable quick and accurate data retrieval, as it has the biggest impact on day-to-day use of KnowFlow.</p>
                  </div>
                </div>
              </div>
              {/* Right content */}
              <div className="col-span-5 space-y-4">
                <div className="border border-border rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-medium">Product Brief</span>
                    <span className="text-xs bg-muted px-2 py-0.5 rounded">OUTPUT</span>
                  </div>
                  <div className="text-sm space-y-2">
                    <p>• <strong>Target Audience:</strong> Urban dwellers aged 25-45 interested in sustainability and local food production</p>
                    <p>• <strong>Core Features:</strong></p>
                    <p>• AI-enabled crop health monitoring</p>
                    <p>• Expert advice</p>
                    <p className="font-medium mt-4">Action Items:</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroImage;
