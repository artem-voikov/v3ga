namespace v3ga.Models {
    public class PagePref {
        public int PageNumber { get; set; }
        public int PageLength { get; set; }
        public string Sorting { get; set; }
        public string Filtering { get; set; }
        public bool IsDescending { get; set; }
    }
}