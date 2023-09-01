namespace StudyApp.Data
{
    public class TableModel
    {
        /// <summary>
        /// 순서
        /// </summary>
        public int Index { get; set; }

        /// <summary>
        /// 제목
        /// </summary>
        public string Title { get; set; }

        /// <summary>
        /// 작성자
        /// </summary>
        public string User { get; set; }

        /// <summary>
        /// 내용
        /// </summary>
        public string Content { get; set; }

        /// <summary>
        /// 작성일
        /// </summary>
        public string Date { get; set; } = DateTime.Now.ToString("yyyy-MM-dd");
    }
}
