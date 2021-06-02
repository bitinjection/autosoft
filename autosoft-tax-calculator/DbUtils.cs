using NHibernate;
using NHibernate.Cfg;
using NHibernate.Tool.hbm2ddl;
using FluentNHibernate.Cfg;
using FluentNHibernate.Cfg.Db;
using System.IO;

namespace AutosoftTaxCalculator
{
  public class DbUtils
  {
    private const string DbFile = "autosoft-example.db";

    public static ISessionFactory CreateSessionFactory()
    {
      return Fluently.Configure()
          .Database(SQLiteConfiguration.Standard
              .UsingFile(DbFile))
          .Mappings(m =>
              m.FluentMappings.AddFromAssemblyOf<Program>())
          .ExposeConfiguration(BuildSchema)
          .BuildSessionFactory();
    }

    public static void BuildSchema(Configuration config)
    {
      // delete the existing db on each run
      if (!File.Exists(DbFile))
        new SchemaExport(config)
          .Create(false, true);
    }
  }
}