define(['Song'], function(Song) {
  var song;

  describe('Song', function() {
    describe('initialize', function() {
      it('should capitalize the title', function() {
        song = new Song('test this out');
        expect(song.title).toBe('Test this out');
      });

      it('should not care about an empty string', function() {
        song = new Song('');
        expect(song.title).toBe('');
      });
    });
  });
});